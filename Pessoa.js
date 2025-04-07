class Pessoa {
    constructor(nome, idade) {
        if (this.constructor === Pessoa) { // RETORNA UM ERRO CASO O USUÁRIO TENTE INSTANCIAR ESSA CLASSE DIRETAMENTE
            throw new Error("NÃO SE PODE INSTÂNCIAR UMA CLASSE ABSTRATA!");
        }
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }
}

export default Pessoa;