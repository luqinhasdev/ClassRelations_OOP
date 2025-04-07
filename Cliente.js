import Pessoa from './Pessoa.js';

class Cliente extends Pessoa {
    constructor(nome, idade, conta) {
        super(nome, idade);
        this._conta = conta;
    }

    get conta() {
        return this._conta;
    }
}

export default Cliente;