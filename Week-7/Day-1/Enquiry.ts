import { PetRequest } from "./PetRequest";

export class Enquiry {
    requestedPets: PetRequest[];
    currentStatus: string;
    isAvailable: boolean;
}   