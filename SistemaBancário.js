import Banco from './Banco.js';
import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaPoupanca from './ContaPoupança.js';

let banco = new Banco("Banco Exemplo", "001");

let contaCorrente = new ContaCorrente("001", "12345", 1000, 500);
let contaPoupanca = new ContaPoupanca("001", "67890", 500);

let cliente1 = new Cliente("João", 30, contaCorrente);
let cliente2 = new Cliente("Maria", 25, contaPoupanca);

banco.adicionarCliente(cliente1);
banco.adicionarCliente(cliente2);
banco.adicionarConta(contaCorrente);
banco.adicionarConta(contaPoupanca);

contaCorrente.deposito(200);
contaPoupanca.deposito(100);

contaCorrente.sacar(100);
contaPoupanca.sacar(100);