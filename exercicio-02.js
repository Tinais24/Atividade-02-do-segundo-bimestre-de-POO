"use strict";
// Super classe
class Veiculo {
    marca;
    modelo;
    // Constructor que monta os atributos
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
// Classe Carro que puxa os atributos de Veículo
class Carro extends Veiculo {
    quantidadePortas;
    constructor(marca, modelo, quantidadePortas) {
        // Chama o construtor da superclasse Veiculo
        super(marca, modelo);
        this.quantidadePortas = quantidadePortas;
    }
    // Método para exibir todas as informações
    exibirDetalhes() {
        console.log(`Carro: ${this.marca} ${this.modelo} | Portas: ${this.quantidadePortas}`);
    }
}
const meuCarro = new Carro("Renault", "Twingo", 4);
meuCarro.exibirDetalhes();
