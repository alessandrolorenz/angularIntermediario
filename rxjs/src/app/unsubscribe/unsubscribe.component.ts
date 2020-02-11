import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  private subscriptionsAreActive= false;
  private subscriptions: Subscription[] =[];
  private unsubscribeAll$: Subject<any> = new Subject();
  private intervalSubscription: Subscription = null;

  constructor() { }

  ngOnInit() {

    this.checkSubscriptions()

  }

  checkSubscriptions() {
    this.intervalSubscription = interval(200)
      .subscribe(()=>{
        let active = false;
        this.subscriptions.forEach((s)=> {
          console.log()
          if(!s.closed)
            active = true;
        });
      this.subscriptionsAreActive = active;
    })

  }

  subscribe(){
    const subscription1 = interval(200)
      .pipe(takeUntil(this.unsubscribeAll$)) // take until ele gerar um evento - unsubscribe()
      .subscribe((i) => {console.log(i)})
    const subscription2 = fromEvent(document, 'mousemove')
        .pipe(takeUntil(this.unsubscribeAll$))
        .subscribe(e=>console.log(e))

    this.subscriptions.push(subscription1);
    this.subscriptions.push(subscription2);
  }

  unsubscribe(){
    this.unsubscribeAll$.next(); // coloca no pipe takeuntil
  }

  ngOnDestroy(){
    if(this.intervalSubscription != null)
      this.intervalSubscription.unsubscribe();
      console.log("Destoy");
      this.unsubscribeAll$.next(); 
  }


}
