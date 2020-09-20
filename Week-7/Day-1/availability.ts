
import { PetWithCount } from "./PetWithCount";
import { PetRequest } from "./PetRequest";


export class Availability {
    allAvailablePets:PetRequest[];

    constructor() {
        this.allAvailablePets = [];
    }

    insert(petsAvailable:PetRequest[]) :void{
        for(let item of petsAvailable) {
            /**
            * Adding petCharacterstics and petHistroy as required fields
            */ 
            if(item.pet.petCharacterstics === undefined) {
                throw new Error("PetCharacterstics can not be null");
            }
            if(item.pet.petHistory === undefined) {
                throw new Error("PetHistory can not be null");
            }
            /**
             * Inserting availablePets to allAvailablePets
             */
            // console.log("insering petRequest:" + JSON.stringify(petsAvailable));
            this.allAvailablePets.push(item);
        }
    }

    findAvailablePetsCollection(): PetWithCount[] {
        let petWithCountArr = [];
        for(let item of this.allAvailablePets) {
            let petWithCount = new PetWithCount();
            petWithCount.petCount = item.petCount;
            petWithCount.petType = item.pet.petType;

            petWithCountArr.push(petWithCount);

        }
        return petWithCountArr;
    }
}