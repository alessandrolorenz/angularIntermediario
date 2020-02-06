import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/clients/client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client: Client;
  onEdit: boolean = false;
  name: string;
  age: number;
  @Output() updateClient = new EventEmitter<Client>()
  @Output() removeClient = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }
  
  edit() {
    this.onEdit = true;
    this.name = this.client.name
    this.age = this.client.age

  }
  
  remove() {
    this.removeClient.emit();
  }
  
  save() {
    this.onEdit = false;
    this.updateClient.emit(
        {name: this.name, age: this.age}
    );
  }

}
