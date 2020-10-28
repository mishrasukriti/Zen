"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var Document = /** @class */ (function () {
    function Document(idProof, idNumber) {
        this.idProof = idProof;
        this.idNumber = idNumber;
    }
    Document.prototype.setDocumentDetail = function (idProof, idNumber) {
        this.idProof = idProof;
        this.idNumber = idNumber;
    };
    Document.prototype.getidProof = function () {
        return this.idProof;
    };
    return Document;
}());
exports.Document = Document;
