import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name:string = 'Matheus';
  idade:number = 30;
  job:string='programador';
  hobbie=['Jogar','programar','dar o cu'];
  car={
    name:'polo',
    year:2019,
    color: 'preto'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
