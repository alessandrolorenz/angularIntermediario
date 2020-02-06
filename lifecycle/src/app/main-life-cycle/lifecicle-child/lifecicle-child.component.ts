import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecicle-child',
  templateUrl: './lifecicle-child.component.html',
  styleUrls: ['./lifecicle-child.component.css']
})
export class LifecicleChildComponent implements OnInit, OnChanges, OnDestroy{

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCycleEvent[] = [];
  nextEventId: number =0;

  colors: string[] = ["accent", "warn", "primary"]

  constructor() {
    console.log(this.name + " constructor");
    this.newEvent("constructor");
   }

  ngOnInit() {
    console.log(this.name + " ngOnInit");
    this.newEvent("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    console.log(this.name + " ngOnChanges");
    this.newEvent("ngOnChanges");
   /* for(let propsName in changes) {
      console.log(propsName);
      console.log(changes[propsName].currentValue)
    }*/
   /* if(changes['name']) {
      console.log("new name: " + changes['name'].currentValue)
    }*/

  }

  ngAfterContentInit() {
    console.log(this.name + " ngAfterContenInit");
    this.newEvent("ngAfterContenInit");
  }

  ngAfterViewInit() {
    console.log(this.name + " ngAfterViewIniti");
    this.newEvent("ngAfterViewIniti");
  }

  ngOnDestroy() {
    console.log(this.name + " ngOnDestroy");
    this.newEvent("ngOnDestroy");
  }

  newEvent(name: string){
    let id = this.nextEventId ++;
    this.events.push({
      id: id, 
      color: this.colors[id%this.colors.length], 
      name: name});
    setTimeout(()=>{
      let idx = this.events.findIndex((e) => e.id==id);
      if (idx >= 0)
        this.events.splice(idx, 1);
    }, 2000 + this.events.length*1000)
  }

}
