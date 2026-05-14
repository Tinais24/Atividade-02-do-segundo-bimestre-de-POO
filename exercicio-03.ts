export {};
// Super classe
class Funcionario {

    protected nome: string;
    protected salario: number;

    // Constructor que monta os atributos
    constructor(nome: string, salario: number) {

        this.nome = nome;
        this.salario = salario;
    }
}

// Classe Gerente que puxa os atributos de Funcionario
class Gerente extends Funcionario {

    constructor(nome: string, salario: number){

        super(nome,salario);
    }

    public exibirDadosGerente(): void {

        // Acesso direto aos atributos protected da classe pai
        console.log(`Gerente: ${this.nome}`);
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
    }
}

const gerente24 = new Gerente("Erik Gimenez", 6500);
gerente24.exibirDadosGerente();
export{};