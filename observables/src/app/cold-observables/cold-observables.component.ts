import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  subscription1: Subscription;
  subscription2: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";

  constructor() { }

  ngOnInit() {
    this.s1 = "Initializing..."
    this.s2 = "Initializing..."

   //COLD OBSERVABLES: cada subscrição gera um novo GERADOR(observable) de dados diferente
    const myInternalObservable = new Observable(
      (observer: Observer<any>) => {
        let i: number =0;
        let id = setInterval(()=>{
          i++;
          console.log("from observable " + i);
          if(i==10)
            observer.complete();
          else if (i%2 ==0)
            observer.next(i);
        }, 100 );
        return () => {
          clearInterval(id)
        }
      }
    );

    this.s1 = "Waiting interval..."
    this.subscription1 = myInternalObservable.subscribe(
      (_n)=> {this.n1 = _n  },
      (error) => {this.s1 = "Error" + error},
      ()=> {this.s1 = "Completed"}
    );
    this.s2 = "Waiting interval..."
    setInterval(()=>{
      this.subscription2 = myInternalObservable.subscribe(
        (_n) => this.n2 = _n ,
        (error) => this.s2 = "error" + error,
        () => this.s2 = "completed"
      );
    },400)
    
    setTimeout(()=> {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
    }, 1000)

  };

}
