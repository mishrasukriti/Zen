
import { Availability } from "./availability";
import { PetWithCount } from "./PetWithCount";
import { PetRequest } from "./PetRequest";
import { Enquiry } from "./Enquiry";





export class Request {
    enquiryArray:Enquiry[];
    availabilityObject:Availability;

    constructor() {
        this.availabilityObject = new Availability();
        this.enquiryArray = [];
    }

    insert(petsEnquiry:PetRequest[]) :void{
        let enquiry = new Enquiry();
        enquiry.currentStatus = "UNASSIGNED";
        // TODO check this later.
        enquiry.isAvailable = false;
        enquiry.requestedPets = petsEnquiry;

        this.enquiryArray.push(enquiry);
    
    }

    // checkStatusOfFirstFiveEnquiries():Enquiry[] {
    //     let ansArray = [];
        
    //     for(let i = 0;i<5;i++) {
    //         let isAvailable = true;
    //         let currEnquiry = this.enquiryArray[i];
    //         let petTypeWithCountArr = this.availabilityObject.findAvailablePetsCollection();
    //         for(let enquiredPet of currEnquiry.requestedPets) {
    //             let availablePetCount = this.findAvailablePetCount(petTypeWithCountArr, enquiredPet.pet.petType);
    //             if(enquiredPet.petCount > availablePetCount) {
    //                 isAvailable = false;
    //                 break;
    //             }
    //         }
    //         currEnquiry.isAvailable = isAvailable;
    //         ansArray.push(currEnquiry);
    //     }
    //     return ansArray;
    // }

    checkStatusOfFirstFiveEnquiries():Enquiry[] {
        let ansArray = [];
        
        for(let i = 0;i<5;i++) {
            
            let currEnquiry = this.enquiryArray[i];
            ansArray.push(currEnquiry);
        }
        return ansArray;
    }

    findAvailablePetCount(arr: PetWithCount[],petType: string):number {
        let count = 0;
        for(let item of arr) {
            if(item.petType === petType)return item.petCount;
        }
        return count;
    }
}