"use strict";
exports.__esModule = true;
exports.Availability = void 0;
var PetWithCount_1 = require("./PetWithCount");
var Availability = /** @class */ (function () {
    function Availability() {
        this.allAvailablePets = [];
    }
    Availability.prototype.insert = function (petsAvailable) {
        for (var _i = 0, petsAvailable_1 = petsAvailable; _i < petsAvailable_1.length; _i++) {
            var item = petsAvailable_1[_i];
            /**
            * Adding petCharacterstics and petHistroy as required fields
            */
            if (item.pet.petCharacterstics === undefined) {
                throw new Error("PetCharacterstics can not be null");
            }
            if (item.pet.petHistory === undefined) {
                throw new Error("PetHistory can not be null");
            }
            /**
             * Inserting availablePets to allAvailablePets
             */
            // console.log("insering petRequest:" + JSON.stringify(petsAvailable));
            this.allAvailablePets.push(item);
        }
    };
    Availability.prototype.findAvailablePetsCollection = function () {
        var petWithCountArr = [];
        for (var _i = 0, _a = this.allAvailablePets; _i < _a.length; _i++) {
            var item = _a[_i];
            var petWithCount = new PetWithCount_1.PetWithCount();
            petWithCount.petCount = item.petCount;
            petWithCount.petType = item.pet.petType;
            petWithCountArr.push(petWithCount);
        }
        return petWithCountArr;
    };
    return Availability;
}());
exports.Availability = Availability;
