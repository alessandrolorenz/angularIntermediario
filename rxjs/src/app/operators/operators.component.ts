import { Component, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, Subscription, Subject, pipe, timer } from 'rxjs';
import { map, delay, filter, tap, take, first, last, debounceTime, takeWhile, takeUntil } from 'rxjs/operators';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatRipple, {static: false}) ripple: MatRipple;
  private searchInput: string = '';

  constructor() { }

  ngOnInit() {
  }

  mapClick() {
    from([1,2,3,4])
      .pipe(
        map(i=> 2 * i),
        map(i=> "Number " + i), // parecido com o map para array do js
        delay(1000)
      )
     .subscribe(i => console.log(i))

     fromEvent(document, "click")
        .pipe(
          map((e:MouseEvent) => ({x: e.screenX, y: e.screenY}))
        )
        .subscribe((pos)=>console.log(pos));
  }

  filterClick() {
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        filter(i => i%2 == 1)
      )
      .subscribe(i => console.log(i))

      interval(1000)
        .pipe(
          filter(i =>i%2 == 0),
          map(i => "Value:  " + i),
          delay(1000))
      .subscribe(i => console.log(i))
  }

  tapClick() { 

  interval(1000)
    .pipe(
      tap(i => console.log('')),
      tap(i => console.log('before filter', i)),
      filter(i => i%2 == 0),
      tap(i => console.log('after filter', i)),
      map(i => "Value:  " + i),
      tap(i => console.log('after map', i)),
      delay(1000))
  .subscribe(i => console.warn(i))

  }

  takeClick() {
    const observable = new Observable((observer) => {
      let i;
      for (i=0; i<20; i++) {
        setTimeout(() => observer.next(Math.round(Math.random()*100)), i*100);
      }
      setTimeout(() => observer.complete(), i *100) 
    });
    const s: Subscription = observable
      .pipe(
        tap(i =>console.log(i)),
        take(10) //take faz o unsubscript automarticamente

        // first() //desisnscreve depois do primeiro elemento
        // last() //desisnscreve depois do ultimo elemento
      )
      .subscribe(v=> console.log("Output : ", v),
        (error) => console.error(error),
        () => console.log('Complete!')
      );

      const interv = setInterval(()=> {
        console.log('Checking...');
        if(s.closed) {
          console.warn('subscription closed');
          clearInterval(interv)
        }
      }, 200)
  }


  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true, centered: true
    });
    rippleRef.fadeOut();
  }

  debounceTimeClick(){
    fromEvent(document, 'click')
      .pipe(
        tap(e => console.log(" Click ")),
        debounceTime(1000) //ele ignora os eventos num periodo menos que o especificado(1000) 
      )
      .subscribe(
        (e: MouseEvent) => {
          console.log('Clicked with debounceTime', e);
          this.launchRipple()
        }
      )
  }

  searchEntry$: Subject<string> = new Subject<string>(); //$ significa que é um observable (tipo convensão) dai abe-se que pode se inscrever
  serachBy_UsingDebounce(event){
    this.searchEntry$.next(this.searchInput); //criou um observ. e dai pode se inscrever na func: dedounceTimeSearch()
  }  

  debounceTimeSearch(){
    this.searchEntry$
    .pipe(debounceTime(500))
      .subscribe(s => console.log(s))
  }

  takeWhileClick() {
    interval(500)
      .pipe( takeWhile((value, index) => (value <8)) )
      .subscribe(
        (i) => console.log('TakeWhile:  ', i),
        (error) => console.error(error),
        () => console.log("Completed!") //qnd sair ele dá auto unsubscribe

      )
  }


  takeUntilClick(){
    let duetime$ = timer(2500) // este gera o evento apenas uma vez (lembrar) e ja desinscreve

    interval(500) //fica gerando de 500 em 500 um evento
      .pipe(takeUntil(duetime$) )
      .subscribe(
        (i) => console.log('TakeWhile:  ', i),
        (error) => console.error(error),
        () => console.log("Completed!") //qnd sair ele dá auto unsubscribe
      )
  }

}
