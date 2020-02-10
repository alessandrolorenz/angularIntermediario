import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, ConnectableObservable } from 'rxjs';
import { publish, refCount, share } from 'rxjs/operators'

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
        console.log('%c Observable created', 'background: #cccccc; color: #fff000');
        setInterval(()=>{
          i++
        console.log('%c i= ' + i, 'background: #cccccc; color: #0000ff');

          (i==100) ? observer.complete() : observer.next(i);
        }, 1000);

      }
    );
    // this.usingSubjects();
    // this.usingPublish()
    this.usingShare()
  }


  usingShare(){ // se alguem conectar depois do completed ele vai gerar os dados de novo
    const multicasted = this.myObservable.pipe(share())

      // subscriber 1
    this.s1 = "waitning for interval"
    setTimeout(() => {
      multicasted.subscribe((_n)=>{
        this.n1 = _n;
        this.s1 = "ok"
      })
    }, 1000);


    // subscriber 1
    this.s2 = "waitning for interval"
    setTimeout(() => {
      multicasted.subscribe((_n)=>{
        this.n2 = _n;
        this.s2 = "ok"
      })
    }, 2500)
  }


  usingPublish(){ // publica e nós se escrevemos e refCount conecta - // se conectar depois do completed ele vai NÃO gerar os dados de novo
    
    // const multicasted =this.myObservable.pipe(publish(), refCount()); // neste caso o numero é gerado somente depois do subscribe
    const multicasted: ConnectableObservable<number> = this.myObservable
          .pipe(publish()) as ConnectableObservable<number> 
    multicasted.connect(); // desta forma o numero é criado desde o inicio

      // subscriber 1
    this.s1 = "waitning for interval"
    setTimeout(() => {
      multicasted.subscribe((_n)=>{
        this.n1 = _n;
        this.s1 = "ok"
      })
    }, 1000);


    // subscriber 1
    this.s2 = "waitning for interval"
    setTimeout(() => {
      multicasted.subscribe((_n)=>{
        this.n2 = _n;
        this.s2 = "ok"
      })
    }, 2500)
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
    }, 2500)

  }


}
