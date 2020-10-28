export class Document{
    idProof:string;
    idNumber: number;

    constructor(idProof:string, idNumber:number){
        this.idProof= idProof;
        this.idNumber = idNumber;
    }

    setDocumentDetail(idProof:string, idNumber:number){
        this.idProof = idProof;
        this.idNumber = idNumber;
    }

    getidProof():string{
        return this.idProof;
    }
}