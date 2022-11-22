export class Cliente {

    id: number;
    nome: string;
    cpf: string;
    email: string;
    dataCadastro: string;

    constructor() {
        this.id = 0;
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.dataCadastro = "null";
    }



    toString() {
        return this.id + this.nome + this.cpf + this.email + this.dataCadastro;
    }


}