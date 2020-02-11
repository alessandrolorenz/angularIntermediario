import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';
import { map, mergeAll, mergeMap, switchAll, switchMap, debounceTime } from 'rxjs/operators';

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
    // this.firstOption();
    // this.secondOption();
    this.thirdOption();
  }

  filterPeople(searchInput: string): Observable<Person[]> {
    if(searchInput.length === 0)
      return of([])
    return this.http.get<Person[]>(`${this.url}/${this.searchIpnput}`)
  }

  thirdOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup');
    /*
    this.people$ = keyup$.pipe(map((e)=> this.filterPeople(this.searchIpnput)))
        .pipe(switchAll()) //assim ele troca as requisições, no fim só fica a ultima
    */
   this.people$ = keyup$
   .pipe(
    debounceTime(800) ,
    switchMap(()=> this.filterPeople(this.searchIpnput)))
  }

  secondOption() {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup');
    /*
    let fetch$ = keyup$.pipe(map((e)=> this.filterPeople(this.searchIpnput)))
    
    fetch$
    .pipe(mergeAll())
    .subscribe(data=>console.log(data)) // este não precisa

    this.people$ =  this.people$ = fetch$
    .pipe(mergeAll())
    */
   this.people$ = keyup$.pipe(mergeMap((e)=> this.filterPeople(this.searchIpnput))) // este só conecta as reqs, e faz todas, mesmo qnd a anterior nao retornou

  }

  firstOption() {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe(e =>{
        this.filterPeople(this.searchIpnput)
        .subscribe(r=>console.log(r)) //callback hell 
      })

  }

}
