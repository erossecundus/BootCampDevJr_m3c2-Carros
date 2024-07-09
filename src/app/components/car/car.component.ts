import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { Car } from '../../car';
import { never } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})


export class CarComponent {
  
  // anotação: a info vem de fora (do obj no componente cars)
  @Input()
  car : Car = {} as Car;

  // avisa que o método save() vai fazer um Event Emitter
  @Output()
  saveEmitter = new EventEmitter;
  save() {
    this.saveEmitter.emit();  // vai ser lido no tamplate do componente cars
  }
}
