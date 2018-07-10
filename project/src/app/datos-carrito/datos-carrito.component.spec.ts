import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCarritoComponent } from './datos-carrito.component';

describe('DatosCarritoComponent', () => {
  let component: DatosCarritoComponent;
  let fixture: ComponentFixture<DatosCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
