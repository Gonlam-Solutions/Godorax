import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaAddProductComponent } from './mesa-add-product.component';

describe('MesaAddProductComponent', () => {
  let component: MesaAddProductComponent;
  let fixture: ComponentFixture<MesaAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
