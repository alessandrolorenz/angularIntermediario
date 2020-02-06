import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecicleChildComponent } from './lifecicle-child.component';

describe('LifecicleChildComponent', () => {
  let component: LifecicleChildComponent;
  let fixture: ComponentFixture<LifecicleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecicleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecicleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
