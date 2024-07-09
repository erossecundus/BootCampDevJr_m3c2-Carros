import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  
  // obj vazio do tipo Car; passa do pai para o filho pelo input
  car : Car = {} as Car;
  isUpdate : boolean = false;
  idCount : number = 4;                       // começa em 4 para os testes

  cars : Car[] = [
    {id:1, name:'corsa', assembler:'Chevrolet', price:20000, year:2015},
    {id:2, name:'palio', assembler:'Fiat', price:25000, year:2017},
    {id:3, name:'fusca', assembler:'Volkswagen', price:30000, year:1975}
  ];

  // método para salvar um car no array cars
  saveCar() {
    if(!this.isUpdate) {                      // se não for update:
      this.car.id = this.idCount;             // determina um id para novo elemento
      this.idCount++;
      this.cars.push(this.car);               // salvando em memória o novo elemento
    }
    this.car = {} as Car;                     // Limpando o obj
    this.isUpdate = false;                    // retorna isUpdate para falso toda vez
  };

  update(updCar : Car) {       // faz a atualização de forma automática no array (two-way binding)
    this.car = updCar;
    this.isUpdate = true;
  };

  remove(remCar : Car) {       // filtra o que for diferente do obj que estiver no input
    this.cars = this.cars.filter(c => c !== remCar);
  };
}
