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
  private editClient: Client = null;

  constructor() { }
  
  save(){
    if(this.editClient == null) {
      this.clients.push({name: this.name, age: this.age, food: this.food});
      this.age=null;
      this.name="";
      this.food="";
    }
  }

  ngOnInit() {
  }

}
