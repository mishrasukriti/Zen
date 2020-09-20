import { Availability } from "./availability";
import { Request } from "./request";

import { PetWithCount } from "./PetWithCount";
import { Enquiry } from "./enquiry";
import { Pet } from "./Pet";
import { PetRequest } from "./PetRequest";
import { PetCharacterstics } from "./petCharacterstics";


export class PetShop {
    availability: Availability;
    request: Request;

    constructor() {
        this.availability = new Availability();
        this.request = new Request();
    }

    mapRequestDataWithAvailabilityData(): void {
        let enquiryArray = this.request.enquiryArray;
        let petTypeWithCountArr = this.availability.findAvailablePetsCollection();
        
        for(let currEnq of enquiryArray) {
            if(currEnq.currentStatus === "UNASSIGNED") {
                let arePetsAvailable = this.canBeFulfilled(currEnq);
                if(arePetsAvailable) {
                    currEnq.currentStatus = "FULFILLED";
                    currEnq.isAvailable = true;
                    for(let currPet of currEnq.requestedPets) {
                        let petWithCount = this.findPet(petTypeWithCountArr, currPet.pet.petType);
                        let availablePetCount = this.findAvailablePetCount(petTypeWithCountArr, currPet.pet.petType);
                        for(let availablePet of this.availability.allAvailablePets) {
                            if(availablePet.pet.petType === currPet.pet.petType) {
                                availablePet.petCount= availablePet.petCount-currPet.petCount;
                            }
                        }
                        
                    }
                }
            }
            
        }
    }

    canBeFulfilled(currEnq: Enquiry): Boolean {
        let isAvailable = true;
        let petTypeWithCountArr = this.availability.findAvailablePetsCollection();
        for(let currRequestedPet of currEnq.requestedPets) {
        let petTypeWithCountArr = this.availability.findAvailablePetsCollection();
            let availablePetCount = this.findAvailablePetCount(petTypeWithCountArr, currRequestedPet.pet.petType);
            if(currRequestedPet.petCount > availablePetCount) {
                isAvailable = false;
                break;
            }
        }
        // console.log("Returning availability value for enquiry: " + JSON.stringify(currEnq) + " as: " + isAvailable);
        return isAvailable;
    }

    findAvailablePetCount(arr: PetWithCount[],petType: string):number {
        let count = 0;
        for(let item of arr) {
            if(item.petType === petType)return item.petCount;
        }
        return count;
    }

    findPet(arr: PetWithCount[],petType: string):PetWithCount {
        let object = null;
        for(let item of arr) {
            if(item.petType === petType)return item;
        }
        return object;
    }
}

let petShop  = new PetShop();
console.log("Adding Availablity for 20 Dogs, 15 Cats and 20 Parrots");
petShop.availability.insert(createSamplePetRequestArray());

console.log("Checking Availability count");
let availabilityCollection = petShop.availability.findAvailablePetsCollection();
console.log("Available pets are: " + JSON.stringify(availabilityCollection));

console.log("Adding enquiries for 20 Cats, 30 Parrots");
petShop.request.insert(createSampleEnquiry(0, 20, 30));
console.log("Adding enquiries for 10 Dogs, 2 Cats");
petShop.request.insert(createSampleEnquiry(10, 2, 0));
console.log("Adding enquiries for 5 Cats, 2 Parrots");
petShop.request.insert(createSampleEnquiry(0, 5, 2));
console.log("Adding enquiries for 20 Dogs, 20 Cats, 20 Parrots");
petShop.request.insert(createSampleEnquiry(20, 20, 20));

console.log("Adding enquiries for 2 Dogs, 3 Cats, 4 Parrots");
petShop.request.insert(createSampleEnquiry(2, 3, 4));

// console.log("Checking first 5 Enquiry status");
// console.log("First five enquiry status is:" + JSON.stringify(petShop.request.checkStatusOfFirstFiveEnquiries()));

console.log("Mapping enquiries to available pets");
petShop.mapRequestDataWithAvailabilityData();

console.log("Checking Availability count");
availabilityCollection = petShop.availability.findAvailablePetsCollection();
console.log("Available pets are: " + JSON.stringify(availabilityCollection));

// console.log("Checking first 5 Enquiry status");
// console.log("First five enquiry status is:" + JSON.stringify(petShop.request.checkStatusOfFirstFiveEnquiries()));





function createSampleEnquiry(dogCount:number, catCount:number, parrotCount:number) {
    let petRequestArr :PetRequest[] = [];
    petRequestArr.push(createPetRequest('DOG', dogCount, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('CAT', catCount, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('PARROT', parrotCount, 5, 'White', 10, 'DogHistory'));
    return petRequestArr;
}

function createSamplePetRequestArray():PetRequest[] {
    let petRequestArr :PetRequest[] = [];
    petRequestArr.push(createPetRequest('DOG', 20, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('CAT', 15, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('PARROT', 20, 5, 'White', 10, 'DogHistory'));
    return petRequestArr;
}

function createPetRequest(petType:string, petCount:number, age: number, color:string, weight:number, petHistory: string) {
    let pet = createPet(petType, age, color, weight, petHistory);
    let petRequest = new PetRequest();
    petRequest.pet = pet;
    petRequest.petCount = petCount;

    return petRequest;
}

function createPet(petType:string, age: number, color:string, weight:number, petHistory: string) {
    let pet = new Pet();
    pet.petType = petType;
    
    let petCharactersticObj = new PetCharacterstics();
    petCharactersticObj.age = age;
    petCharactersticObj.color = color;
    petCharactersticObj.weight = weight;
    pet.petCharacterstics = petCharactersticObj;

    pet.petHistory = petHistory;
    return pet;
}