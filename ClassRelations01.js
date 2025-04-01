class Engine {
    constructor(name) {
        this.name = name;
    }
}
class Car {
    constructor(name, engine, manufacturer) {
        this.name = name;
        this.engine = engine;
        this.manufacturer = manufacturer;
        manufacturer.addCar(this); // Acessa a Função de Adcionar Carros da Classe Fabricante, Adcionando o Carro da Instância Atual como Parâmetro para a Utilização do Método Adcionar Carros da Classe Fabricante.
    }
}
class Manufacturer { // Classe Fabricante: Têm os Parâmetros Nome e Carros, e os Métodos Mostrar e Adcionar Carros.
    constructor(name) {
        this.name = name;
        this.cars = [];
    }
    addCar(car) { // Adcionar Carro: Recebe o Parâmetro Carro e Adciona o Parâmetro Recebido na Lista Vazia de Carros.
        this.cars.push(car);
    }
    showCars() { // Mostrar Carros: Imprime os Fabricantes e Carros Produzidos na Tela, Utilizando um Laço de Repetição.
        console.log(`Manufacturer: ${this.name}`);
        console.log("Produced Cars:");
        this.cars.forEach(car => { // Itera a Lista de Carros e Adciona-os na Impressão do Terminal.
            console.log(`- Car: ${car.name}, Engine: ${car.engine.name}`);
        });
    }
}
const V8 = new Engine("V8");
const Turbo = new Engine("Turbo");

const manufacturerA = new Manufacturer("Manufacturer A");
const manufacturerB = new Manufacturer("Manufacturer B");

const car1 = new Car("Fusca", V8, manufacturerA);
const car2 = new Car("Civic", Turbo, manufacturerB);
const car3 = new Car("BMW X1", V8, manufacturerA);