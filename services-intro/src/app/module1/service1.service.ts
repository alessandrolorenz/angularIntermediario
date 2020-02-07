import { Injectable } from '@angular/core';


@Injectable() // colocar no constructor do componente a ser injetado
export class Service1 {

 public num: number;

  constructor(){
    this.num = Math.round(Math.random()*1000)
    console.log("Serice1 constructor");
  }
  
}