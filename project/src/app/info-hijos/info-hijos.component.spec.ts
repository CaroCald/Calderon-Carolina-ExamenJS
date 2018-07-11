import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHijosComponent } from './info-hijos.component';

describe('InfoHijosComponent', () => {
  let component: InfoHijosComponent;
  let fixture: ComponentFixture<InfoHijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoHijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
