import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModeloComponent } from './info-modelo.component';

describe('InfoModeloComponent', () => {
  let component: InfoModeloComponent;
  let fixture: ComponentFixture<InfoModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
