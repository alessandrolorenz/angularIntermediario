import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, AsyncSubject, BehaviorSubject } from 'rxjs';
import { GenRandomDataService } from '../gen-random-data.service';
import { DataModel } from '../datamodel';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  //tipos de subjects estudados:
  private subject: Subject<DataModel>;
  private replaySubject: ReplaySubject<DataModel>;
  private asyncSubject: AsyncSubject<DataModel>;
  private behaviorSubject: BehaviorSubject<DataModel>;

  constructor(private dataService: GenRandomDataService) { }

  ngOnInit() {
    // let s: Subject<number> = new Subject<number>();
    // s.subscribe(n => console.log(n));
    // s.next(1); // os dados estao sendo gerados por ele no next (presente pra ele)
    // s.next(2); 
    // s.next(3);
    // s.next(4);
    // s.next(5);
    // s.next(6);
    // s.complete()

    this.subject= new Subject<DataModel>();
    this.replaySubject= new ReplaySubject<DataModel>();
    this.asyncSubject= new AsyncSubject<DataModel>();
    this.behaviorSubject= new BehaviorSubject<DataModel>({timestamp: 0, data: 0});
    //aqui ainda não foi gerado-somente a partir do connect() (disparado pelo click)

    this.dataService.dataObservable.subscribe(this.subject);
    this.dataService.dataObservable.subscribe(this.replaySubject);
    this.dataService.dataObservable.subscribe(this.asyncSubject);
    this.dataService.dataObservable.subscribe(this.behaviorSubject); // agora fazer o child

  }


  connect() {
    this.dataService.dataObservable.connect();
  }

}
