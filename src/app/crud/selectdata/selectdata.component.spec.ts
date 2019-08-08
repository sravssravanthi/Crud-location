import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdataComponent } from './selectdata.component';

describe('SelectdataComponent', () => {
  let component: SelectdataComponent;
  let fixture: ComponentFixture<SelectdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
