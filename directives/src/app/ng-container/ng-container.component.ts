import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login:"bob", role: "admin", lastlogin: new Date('2/1/2019')},
    {login:"Lia", role: "user", lastlogin: new Date('2/13/2019')},
    {login:"Eli", role: "admin", lastlogin: new Date('4/28/2019')},
    {login:"Sean", role: "user", lastlogin: new Date('10/6/2019')}
  ]

  constructor() { }

  ngOnInit() {
  }

}
