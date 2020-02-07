import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsTableComponent } from './produts-table.component';

describe('ProdutsTableComponent', () => {
  let component: ProdutsTableComponent;
  let fixture: ComponentFixture<ProdutsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
