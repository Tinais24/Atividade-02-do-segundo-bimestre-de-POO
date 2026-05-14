"use strict";
// Super classe
class Pessoa {
    nome;
    idade;
    // Constructor que monta os atributos
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // Método da classe Pessoa
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
// Classe Aluno que puxa os atributos de Pessoa
class Aluno extends Pessoa {
    // Atributos específicos da subclasse
    matricula;
    curso;
    // O constructor do Aluno deve receber os dados dele e os dados da Pessoa
    constructor(nome, idade, matricula, curso) {
        // O super() chama o constructor da classe (Pessoa)
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
    }
    // Método para exibir todas as informações
    exibirDadosAluno() {
        // Chama o método apresentar() que foi herdado
        this.apresentar();
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Curso: ${this.curso}`);
    }
}
const aluno1 = new Aluno("Douglas Antônio", 26, "20261215", "Análise e Desenvolvimento de Sistemas");
// Saída no Terminal
console.log("Dados do Aluno");
aluno1.exibirDadosAluno();
