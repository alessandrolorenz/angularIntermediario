import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit, OnChanges {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log("    Child Child (ngOnInit)" + this.name)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("    Child Child (ngOnChanges)" + this.name)
  }

  ngAfterContentInit(){ // chamado qnd é passado para o filho com ng-content
    console.log("    Child Child (ngAfterContentInit)" + this.name)
  }

  ngAfterViewInit() {
    console.log("    Child Child (ngAfterViewInit)" + this.name)
  }

}
