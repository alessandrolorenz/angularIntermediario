import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  private _name = "";
  
  @Input()
  set name(name: string) { // é visto como um prop mas é uma func
    this._name = "your name is " + (name || '<name empty>'); // somente setar valor mas não para ler (ex q n funciona: let s = c.name)
  }
  
  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit() {
  }

}
