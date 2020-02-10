import { Component, OnInit } from '@angular/core';
import { Observable, Observer, from, of, interval, timer, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  subscription: Subscription = new Subscription(); // sera usado para desinscrever genericamente ques estiver ligado nele

  constructor() { }

  ngOnInit() {
  }

  observableCreate(){
    const hello= Observable.create((observer: Observer<string>)=>{
      observer.next("hello");
      observer.next("from");
      observer.next("observable");
      observer.complete();
    });
    hello.subscribe(val=> console.log(val));

  }

  fromClick() {
    from([1,2,3,4, {x:1, y:2}])
      .subscribe((v)=>console.log(v))
      // ou:
      const source = from([1,2,3,4, {x:1, y:2}])
      source.subscribe((v)=>console.warn(v))
  }
  
  ofClick() {
    of([1,2,3,4, {x:1, y:2}]).subscribe(v=>console.log(v))
  }

  intervalClick() {
    const source = interval(1000);
    // source.subscribe(v=>console.log(v));
    const subscription =  source.subscribe(v=>console.log(v));
    this.subscription.add(subscription)
  }

  timerClick(){
    // const source = timer(1000); // apos o tempo ele gera um retorno só
    const source = timer(2000, 1000); // depois de 2000 ele começa a contar de 1000 em 1000
    const subscription =  source.subscribe(v=>console.log(v));
    this.subscription.add(subscription)

  }
  
    fromEventClick() {
      const subscription = fromEvent(document, 'click') // pode ser uma div, ou outro label-neste caso o documento inteiro
      .subscribe(e=>console.log(e));
      this.subscription.add(subscription)
    }

  unsubscribeClick() {
    this.subscription.unsubscribe(); // desescreve de todos (intervalClick e timerClick)
    this.subscription = new Subscription();
  }


}
