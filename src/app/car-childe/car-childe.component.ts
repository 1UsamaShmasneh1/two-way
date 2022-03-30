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
    '../../assets/mazda.png',
    '../../assets/volvo.png',
    '../../assets/audi.png',
    '../../assets/mercedes.png'
  ]

  ngOnInit(): void {
  }

}
