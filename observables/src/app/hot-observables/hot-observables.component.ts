import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit {

  n: number;
  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";

  myObservable: Observable<number>;

  constructor() { }

  ngOnInit() {
    
    this.myObservable = new Observable(
      (observer: Observer<number>) => {
        let i: number = 0;
        setInterval(()=>{
          i++
          (i==100) ? observer.complete() : observer.next(i);
        }, 1000);

      }
    );

    this.usingSubjects();

  }

  usingSubjects() {
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject);

    // subscriber 1
    this.s1 = "waitning for interval"
    setTimeout(() => {
      subject.subscribe((_n)=>{
        this.n1 = _n;
        this.s1 = "ok"
      })
    }, 1000);


    // subscriber 1
    this.s2 = "waitning for interval"
    setTimeout(() => {
      subject.subscribe((_n)=>{
        this.n2 = _n;
        this.s2 = "ok"
      })
    }, 4000)

  }


}
