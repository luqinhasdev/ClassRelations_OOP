class Conta {
    constructor(agencia, numero, saldo) {
        if (this.constructor === Conta) {
            throw new Error("NÃO SE PODE INSTÂNCIAR UMA CLASSE ABSTRATA!");
        }
        this._agencia = agencia;
        this._numero = numero;
        this._saldo = saldo;
    }

    get agencia() {
        return this._agencia;
    }

    get numero() {
        return this._numero;
    }

    get saldo() {
        return this._saldo;
    }

    deposito(valor) {
        if (valor <= 0) {
            throw new Error("O VALOR DO DEPÓSITO DEVE SER POSITIVO.");
        }
        this._saldo += valor;
    }

    sacar(valor) {
        throw new Error("MÉTODO ABSTRATO, PORTANTO, DEVE SER IMPLEMENTADO EM SUBCLASSES.");
    }
}

export default Conta;