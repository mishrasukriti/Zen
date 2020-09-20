"use strict";
exports.__esModule = true;
exports.PetShop = void 0;
var availability_1 = require("./availability");
var request_1 = require("./request");
var Pet_1 = require("./Pet");
var PetRequest_1 = require("./PetRequest");
var petCharacterstics_1 = require("./petCharacterstics");
var PetShop = /** @class */ (function () {
    function PetShop() {
        this.availability = new availability_1.Availability();
        this.request = new request_1.Request();
    }
    PetShop.prototype.mapRequestDataWithAvailabilityData = function () {
        var enquiryArray = this.request.enquiryArray;
        var petTypeWithCountArr = this.availability.findAvailablePetsCollection();
        for (var _i = 0, enquiryArray_1 = enquiryArray; _i < enquiryArray_1.length; _i++) {
            var currEnq = enquiryArray_1[_i];
            if (currEnq.currentStatus === "UNASSIGNED") {
                var arePetsAvailable = this.canBeFulfilled(currEnq);
                if (arePetsAvailable) {
                    currEnq.currentStatus = "FULFILLED";
                    currEnq.isAvailable = true;
                    for (var _a = 0, _b = currEnq.requestedPets; _a < _b.length; _a++) {
                        var currPet = _b[_a];
                        var petWithCount = this.findPet(petTypeWithCountArr, currPet.pet.petType);
                        var availablePetCount = this.findAvailablePetCount(petTypeWithCountArr, currPet.pet.petType);
                        for (var _c = 0, _d = this.availability.allAvailablePets; _c < _d.length; _c++) {
                            var availablePet = _d[_c];
                            if (availablePet.pet.petType === currPet.pet.petType) {
                                availablePet.petCount = availablePet.petCount - currPet.petCount;
                            }
                        }
                    }
                }
            }
        }
    };
    PetShop.prototype.canBeFulfilled = function (currEnq) {
        var isAvailable = true;
        var petTypeWithCountArr = this.availability.findAvailablePetsCollection();
        for (var _i = 0, _a = currEnq.requestedPets; _i < _a.length; _i++) {
            var currRequestedPet = _a[_i];
            var petTypeWithCountArr_1 = this.availability.findAvailablePetsCollection();
            var availablePetCount = this.findAvailablePetCount(petTypeWithCountArr_1, currRequestedPet.pet.petType);
            if (currRequestedPet.petCount > availablePetCount) {
                isAvailable = false;
                break;
            }
        }
        // console.log("Returning availability value for enquiry: " + JSON.stringify(currEnq) + " as: " + isAvailable);
        return isAvailable;
    };
    PetShop.prototype.findAvailablePetCount = function (arr, petType) {
        var count = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (item.petType === petType)
                return item.petCount;
        }
        return count;
    };
    PetShop.prototype.findPet = function (arr, petType) {
        var object = null;
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var item = arr_2[_i];
            if (item.petType === petType)
                return item;
        }
        return object;
    };
    return PetShop;
}());
exports.PetShop = PetShop;
var petShop = new PetShop();
console.log("Adding Availablity for 20 Dogs, 15 Cats and 20 Parrots");
petShop.availability.insert(createSamplePetRequestArray());
console.log("Checking Availability count");
var availabilityCollection = petShop.availability.findAvailablePetsCollection();
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
console.log("Checking first 5 Enquiry status");
console.log("First five enquiry status is:" + JSON.stringify(petShop.request.checkStatusOfFirstFiveEnquiries()));
console.log("Mapping enquiries to available pets");
petShop.mapRequestDataWithAvailabilityData();
console.log("Checking Availability count");
availabilityCollection = petShop.availability.findAvailablePetsCollection();
console.log("Available pets are: " + JSON.stringify(availabilityCollection));
console.log("Checking first 5 Enquiry status");
console.log("First five enquiry status is:" + JSON.stringify(petShop.request.checkStatusOfFirstFiveEnquiries()));
function createSampleEnquiry(dogCount, catCount, parrotCount) {
    var petRequestArr = [];
    petRequestArr.push(createPetRequest('DOG', dogCount, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('CAT', catCount, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('PARROT', parrotCount, 5, 'White', 10, 'DogHistory'));
    return petRequestArr;
}
function createSamplePetRequestArray() {
    var petRequestArr = [];
    petRequestArr.push(createPetRequest('DOG', 20, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('CAT', 15, 5, 'White', 10, 'DogHistory'));
    petRequestArr.push(createPetRequest('PARROT', 20, 5, 'White', 10, 'DogHistory'));
    return petRequestArr;
}
function createPetRequest(petType, petCount, age, color, weight, petHistory) {
    var pet = createPet(petType, age, color, weight, petHistory);
    var petRequest = new PetRequest_1.PetRequest();
    petRequest.pet = pet;
    petRequest.petCount = petCount;
    return petRequest;
}
function createPet(petType, age, color, weight, petHistory) {
    var pet = new Pet_1.Pet();
    pet.petType = petType;
    var petCharactersticObj = new petCharacterstics_1.PetCharacterstics();
    petCharactersticObj.age = age;
    petCharactersticObj.color = color;
    petCharactersticObj.weight = weight;
    pet.petCharacterstics = petCharactersticObj;
    pet.petHistory = petHistory;
    return pet;
}
