import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';

interface User {
  login: string;
  name: string;
}

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  //criar o observable first
  private options$: Observable<string[]>
  private user$: Observable<User>

  constructor() { }

  ngOnInit() {
    this.options$ = Observable.create(
      (observer) => {
        for(let i = 0; i <10; i++){
          observer.next(`This is the ${i + 1}th option`)
        }
        observer.complete();
      }
    )
    .pipe(
      map(s=>s+"!!"),
      toArray(),
      delay(1000)
    );

    // this.options$.subscribe(s=>console.log(s));

    this.user$ = new Observable<User>((observer)=>{
      let names = ["Mr. Alceu", "Mr. Pedro", "Mr. Geremias", "Ms. Maria"];
      let logins = ["Alceu", "Pedro", "Geremias", "Maria"];
      let i= 0;
      console.log("Here Observable user$")
      setInterval(()=>{
        if(i == 4)
          observer.complete()
        else {
          observer.next({login: logins[i], name: names[i]})
        }
        i++
      }, 2000)

    });
        // this.user$.subscribe(s=>console.log(s));
     
  }

}
