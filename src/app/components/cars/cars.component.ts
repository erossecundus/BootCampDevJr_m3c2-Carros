import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars : Car[] = [
    {id:1, name:'corsa', assembler:'Chevrolet', price:20000, year:2015},
    {id:2, name:'palio', assembler:'Fiat', price:25000, year:2017},
    {id:3, name:'fusca', assembler:'Volkswagen', price:30000, year:1975}
  ];
}
