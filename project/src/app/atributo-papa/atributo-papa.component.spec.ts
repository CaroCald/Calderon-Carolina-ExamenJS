import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributoPapaComponent } from './atributo-papa.component';

describe('AtributoPapaComponent', () => {
  let component: AtributoPapaComponent;
  let fixture: ComponentFixture<AtributoPapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributoPapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributoPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
