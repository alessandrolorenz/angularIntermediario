import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { map, tap, catchError, retry, retryWhen, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startTest() {
    let obj: Observable<any> = new Observable((observer)=>{
      for(let i =0; i< 10; i++) {
        if(i == 7)
          observer.error(`An error occurred when i = ${i}`)
        else 
          observer.next(i)
      }
    });

    obj
    .pipe(
      map(i => i *5),
      tap(i => console.log('Before error handling ' + i)),
      catchError(error => {
        console.log('Inside catchError' + error);
        // return of(0);
        return throwError('Error thrown: Error')
      }),
      retry(2),
      retryWhen(i => timer(3000))
    )
    // .subscribe(
    //   i => console.log(i),
    //   err => console.log(err),
    //   () => console.log("Completed!!")
    // );


    let obj1: Observable<any> = new Observable<any>((observer) => {
      timer(2000).subscribe(n => observer.next(1500));
      timer(2500).subscribe(n => observer.complete());
    });

    obj1
    .pipe(
      timeout(2500) // se o timeout for menos que o tempo da execussão ele da um erro, neste (2500) caso ele nao da erro
    )
    .subscribe(
      i => console.log(i),
      err => console.log(err),
      () => console.log("Completed!!")
    )




  }



}
