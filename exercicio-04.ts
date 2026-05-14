// Super classe
class Conta {
    private saldo: number;

    // Constructor que monta os atributos
    constructor(saldoInicial: number) {

    this.saldo = saldoInicial;
    }

    getSaldo(): number {

    return this.saldo;
    }
}

class ContaPremium extends Conta {

    // Tentativa de acessar o saldo diretamente
    exibirSaldoPremium(): void {

    // O código abaixo irá gerar o erro de compilação:
    // console.log(this.saldo); // Erro: 'saldo' is private and only accessible within class 'Conta'.

    // Forma correta (através de método público):
    console.log(`Saldo Premium: ${this.getSaldo()}`);
    }
}

/*
RESPOSTAS DO EXERCÍCIO 4:

1 - O código funciona? 
    Não. Se você tentar acessar "this.saldo" diretamente dentro de ContaPremium, o compilador do TypeScript acusará erro.

2 - Por que "private" impede esse acesso? 
    O modificador private restringe o acesso ao atributo unicamente a classe onde ele foi definido. Nem mesmo as subclasses (filhas) podem visualizá-lo ou alterá-lo diretamente.

3. O que mudaria se o atributo fosse "protected"? 
    Se fosse protected, a classe ContaPremium teria permissão para acessar "this.saldo" diretamente, mas o atributo continuaria escondido para quem estivesse fora das classes (como instâncias no arquivo principal).
*/