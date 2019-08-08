import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitylocationComponent } from './citylocation.component';

describe('CitylocationComponent', () => {
  let component: CitylocationComponent;
  let fixture: ComponentFixture<CitylocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitylocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
