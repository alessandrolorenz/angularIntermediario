import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  @Input() teste: string;

  private name: string = "";
  private age: number = 0;

  constructor() {
    console.log("constructor")
   }

  ngOnInit() {
    console.log("ngOnInit")
  }

  ngOnchanges(){
    console.log("ngOnchanges")
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

}
