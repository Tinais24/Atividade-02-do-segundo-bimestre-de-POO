// Super classe
class Funcionario {
    nome;
    salario;
    // Constructor que monta os atributos
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
// Classe Gerente que puxa os atributos de Funcionario
class Gerente extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }
    exibirDadosGerente() {
        // Acesso direto aos atributos protected da classe pai
        console.log(`Gerente: ${this.nome}`);
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
    }
}
const gerente24 = new Gerente("Erik Gimenez", 6500);
gerente24.exibirDadosGerente();
export {};
