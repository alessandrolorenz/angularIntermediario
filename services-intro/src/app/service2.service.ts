import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2 {

  public text="Service 2 text";
  constructor() { 
    console.log("Service 2 - constructor()")
  }
}
