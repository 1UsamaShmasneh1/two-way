import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-childe',
  templateUrl: './car-childe.component.html',
  styleUrls: ['./car-childe.component.css']
})
export class CarChildeComponent implements OnInit {

  constructor() { }

  @Input() carName = ''

  carimgs:string[] = [
    '../../assets/mazda.jpg',
    '../../assets/volvo.jpg',
    '../../assets/audi.jpg',
    '../../assets/mercedes.jpg'
  ]

  ngOnInit(): void {
  }

}
