
import { PetWithCount } from "./PetWithCount";
import { PetRequest } from "./PetRequest";


export class Availability {
    allAvailablePets:PetRequest[];
    
    constructor() {
        this.allAvailablePets = [];
    }

    /**
     * Function to check if the pet requested to be added in available pets already exist
     */
    checkIfCurrPetTypeExist(requestedPetToInsert:PetRequest):boolean{
       
        for(let item of this.allAvailablePets) {
            if(item.pet.petType===requestedPetToInsert.pet.petType){
                item.petCount+= requestedPetToInsert.petCount;
                return  true;
            }
        }
        return false;
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
            //let currPetType = item.pet.petType;
            let flag = this.checkIfCurrPetTypeExist(item);
            if(flag===false)    this.allAvailablePets.push(item);
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