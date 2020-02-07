import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, Observer } from 'rxjs';

@Component({
  selector: 'app-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.css']
})
export class HotObservablesIntroComponent implements OnInit {

  @ViewChild("myButton", {static: true}) button: ElementRef //para pegar a referencia de um objeto

  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";

  constructor() { }

  ngOnInit() {
    let myButtonObservable: Observable<any> = fromEvent(
      this.button.nativeElement,'click');

      myButtonObservable.subscribe((event) => console.log("button clicked 1"))
      myButtonObservable.subscribe((event) => console.log("button clicked 2"))

      class Producer {
        private myListners = [];
        private n = 0;
        private id;

        addListner(l){
          this.myListners.push(l);
          console.log(this.myListners.length)
        }
 
        start(){
          this.id = setInterval(()=>{
            this.n++;
            console.log("From producer: " + this.n);
            for(let l of this.myListners)
              l(this.n)
          }, 600);
        }

        stop(){
          clearInterval(this.id)
          
        }
 
      }


  let producer: Producer = new Producer();

  producer.start();

  setTimeout(()=>{
    
    producer.addListner((n)=> console.log("From listner 1 ", n))
    producer.addListner((n)=> console.log("From listner 2 ", n))

  }, 1200)


  const myHorObservable = new Observable(
    (observer: Observer<number>)=> {
      producer.addListner((n)=>observer.next(n))    
    }
    
  )
  myHorObservable.subscribe((n)=> console.log("From observer 1 ", n))
  myHorObservable.subscribe((n)=> console.log("From observer 2 ", n))

  }//end ngOnInit



}
