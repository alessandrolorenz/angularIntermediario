import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';

@Component({
  selector: 'app-main-life-cycle',
  templateUrl: './main-life-cycle.component.html',
  styleUrls: ['./main-life-cycle.component.css']
})
export class MainLifeCycleComponent implements OnInit {

  private foods: string[] = ["rice", "salt", "onion"];
  private clients: Client[] = [];

  private name: string;
  private age: number;
  private food: string;
  private editClient: number = -1;

  constructor() { }
  
  save(){
    if(this.editClient == -1) {
      this.clients.push({name: this.name, age: this.age, food: this.food});
    }else {
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1
    }
    this.age=null;
    this.name="";
    this.food="";
  }

  edit(i: number) {
    this.age=this.clients[i].age;
    this.name=this.clients[i].name;
    this.food=this.clients[i].food;
    this.editClient = i;


  }

  remove(i: number){
    this.clients.splice(i,1)

  }

  ngOnInit() {
  }

}
