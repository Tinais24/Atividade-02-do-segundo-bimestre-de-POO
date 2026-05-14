// Super classe
class Veiculo {

    public marca: string;
    public modelo: string;

    // Constructor que monta os atributos
    constructor(marca: string, modelo: string) {

        this.marca = marca;
        this.modelo = modelo;
    }
}

// Classe Carro que puxa os atributos de Veículo
class Carro extends Veiculo {

    public quantidadePortas: number;

    constructor(marca: string, modelo: string, quantidadePortas: number) {

        // Chama o construtor da superclasse Veiculo
        super(marca, modelo);
        this.quantidadePortas = quantidadePortas;
    }

    // Método para exibir todas as informações
    exibirDetalhes(): void {
        
        console.log(`Carro: ${this.marca} ${this.modelo} | Portas: ${this.quantidadePortas}`);
    }
}


const meuCarro = new Carro("Renault", "Twingo", 2);
meuCarro.exibirDetalhes();