import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit {
  
  @ViewChild('searchBy', {static: true}) el: ElementRef;
  searchIpnput: string = ''
  people$: Observable<Person[]>;

  private readonly url: string = 'http://localhost:9000'

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.firstOption()
  }

  filterPeople(searchInput: string): Observable<Person[]> {
    if(searchInput.length === 0)
      return of([])
    return this.http.get<Person[]>(`${this.url}/${this.searchIpnput}`)
  }

  firstOption() {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe(e =>{
        this.filterPeople(this.searchIpnput)
        .subscribe(r=>console.log(r)) //callback hell 
      })

  }

}
