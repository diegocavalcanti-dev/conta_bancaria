import { Conta } from "./model/Conta";

export function main() {

    const conta: Conta = new Conta(1, 123, 1, "João da Silva", 1000);
    conta.visualizar();
    conta.sacar(500);
    conta.visualizar();
    conta.depositar(1000);
    conta.visualizar();

    const conta2: Conta = new Conta(1234, 1, 2, "Chaves do SBT", 1530);
    conta2.visualizar();
    conta2.sacar(5000);
    conta2.visualizar();
    conta2.depositar(1000);
    conta2.visualizar();
    
}

main();