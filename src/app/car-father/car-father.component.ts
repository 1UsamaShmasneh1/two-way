import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from './Car';

@Component({
  selector: 'app-car-father',
  templateUrl: './car-father.component.html',
  styleUrls: ['./car-father.component.css']
})

export class CarFatherComponent implements OnInit {

  constructor() { }

  @Output() getCarNameEvent = new EventEmitter<string>();

  cars:Car[] = [{carName: 'Volvo'}, 
                {carName: 'Mazda'}, 
                {carName: 'Mercedes'},
                {carName: 'Audi'}];


  ngOnInit(): void {
  }

}
