"use strict";
exports.__esModule = true;
exports.Request = void 0;
var availability_1 = require("./availability");
var enquiry_1 = require("./enquiry");
var Request = /** @class */ (function () {
    function Request() {
        this.availabilityObject = new availability_1.Availability();
        this.enquiryArray = [];
    }
    Request.prototype.insert = function (petsEnquiry) {
        var enquiry = new enquiry_1.Enquiry();
        enquiry.currentStatus = "UNASSIGNED";
        // TODO check this later.
        enquiry.isAvailable = false;
        enquiry.requestedPets = petsEnquiry;
        this.enquiryArray.push(enquiry);
    };
    Request.prototype.checkStatusOfFirstFiveEnquiries = function () {
        var ansArray = [];
        for (var i = 0; i < 5; i++) {
            var isAvailable = true;
            var currEnquiry = this.enquiryArray[i];
            var petTypeWithCountArr = this.availabilityObject.findAvailablePetsCollection();
            for (var _i = 0, _a = currEnquiry.requestedPets; _i < _a.length; _i++) {
                var enquiredPet = _a[_i];
                var availablePetCount = this.findAvailablePetCount(petTypeWithCountArr, enquiredPet.pet.petType);
                if (enquiredPet.petCount > availablePetCount) {
                    isAvailable = false;
                    break;
                }
            }
            currEnquiry.isAvailable = isAvailable;
            ansArray.push(currEnquiry);
        }
        return ansArray;
    };
    Request.prototype.findAvailablePetCount = function (arr, petType) {
        var count = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (item.petType === petType)
                return item.petCount;
        }
        return count;
    };
    return Request;
}());
exports.Request = Request;
