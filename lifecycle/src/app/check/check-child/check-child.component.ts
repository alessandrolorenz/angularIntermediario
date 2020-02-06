import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

  @Input() name: string;

  constructor() { 
    console.log("      ChecChild constructor")
  }

 
  ngOnInit() {
    console.log("      ChecChild ngOnInit")
  }

  ngOnchanges(){
    console.log("      ChecChild ngOnchanges")
  }

  ngDoCheck() {
    console.log("      ChecChild ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("      ChecChild ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("      ChecChild ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("      ChecChild ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("      ChecChild ngAfterViewChecked")
  }

  ngOnDestroy() {
    console.log("      ChecChild ngOnDestroy")
  }

}
