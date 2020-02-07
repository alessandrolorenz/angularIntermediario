import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

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
    const myFirstObservable = new Observable(
      (observer: Observer<number>)=>{
        observer.next(1);
        observer.next(1);
        observer.next(1);
        observer.next(1);
        observer.error("deu ruim");
        observer.complete();

      }
    );

    myFirstObservable.subscribe(
      (n: number) => console.log(n),
      (error) => console.log(error),
      ()=>console.log("completed") );


    // const timeInterval = interval(400);
    // timeInterval.subscribe(
    //   n=> console.log(n)
    // );
    // console.log("after observable")

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

    this.subscription1 = myInternalObservable.subscribe(
      (_n)=> {this.n1 = _n  },
      (error) => {this.s1 = "Error" + error},
      ()=> {this.s1 = "Completed"}
    );
    this.subscription2 = myInternalObservable.subscribe(
      (_n) => this.n2 = _n ,
      (error) => this.s2 = "error" + error,
      () => this.s2 = "completed"
    )
    
    setTimeout(()=> {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
    }, 900)

  };

}
