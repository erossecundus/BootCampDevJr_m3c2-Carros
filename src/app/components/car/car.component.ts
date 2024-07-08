import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  car : Car = {
    id:1, name:'corsa', assembler:'Chevrolet', price:20000, year:2015
  };
}
