import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecicle-child',
  templateUrl: './lifecicle-child.component.html',
  styleUrls: ['./lifecicle-child.component.css']
})
export class LifecicleChildComponent implements OnInit, OnChanges, OnDestroy{

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  constructor() {
    console.log(this.name + "constructor");
   }

  ngOnInit() {
    console.log(this.name + "ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.name + "ngOnChanges");
  }

  ngAfterContentInit() {
    console.log(this.name + "ngAfterContenInit");
  }

  ngAfterViewInit() {
    console.log(this.name + "ngAfterViewIniti");
  }

  ngOnDestroy() {
    console.log(this.name + "ngOnDestroy");
  }

}
