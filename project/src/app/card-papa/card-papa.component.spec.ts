import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPapaComponent } from './card-papa.component';

describe('CardPapaComponent', () => {
  let component: CardPapaComponent;
  let fixture: ComponentFixture<CardPapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
