import Conta from './Conta.js';

class ContaPoupanca extends Conta {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
    }

    sacar(valor) { // MÉTODO ABSTRATO SENDO IMPLEMENTADO EM UMA CLASSE FILHA
        if (valor > this._saldo) {
            throw new Error("SALDO INSUFICIENTE PARA SAQUE.");
        }
        this._saldo -= valor;
    }
}

export default ContaPoupanca;