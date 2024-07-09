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

  cars : Car[] = [
    {id:1, name:'corsa', assembler:'Chevrolet', price:20000, year:2015},
    {id:2, name:'palio', assembler:'Fiat', price:25000, year:2017},
    {id:3, name:'fusca', assembler:'Volkswagen', price:30000, year:1975}
  ];

  // método para salvar novo car no array cars
  saveCar() {
    this.car.id = this.cars.length + 1;     // determinando proximo id
    this.cars.push(this.car);               // salvando em memória
    this.car = {} as Car;                   // Limpando o obj
  }

}
