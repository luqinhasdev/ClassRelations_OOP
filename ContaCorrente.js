import Conta from './Conta.js';

class ContaCorrente extends Conta {
    constructor(agencia, numero, saldo, limiteExtra) {
        super(agencia, numero, saldo);
        this._limiteExtra = limiteExtra;
    }

    get limiteExtra() {
        return this._limiteExtra;
    }

    sacar(valor) { // MÉTODO ABSTRATO SENDO IMPLEMENTADO EM UMA CLASSE FILHA
        if (valor > this._saldo + this._limiteExtra) {
            throw new Error("SALDO INSUFICIENTE PARA SAQUE.");
        }
        this._saldo -= valor;
    }
}

export default ContaCorrente;