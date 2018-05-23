import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductShowMesaComponent } from './app-product-show-mesa.component';

describe('AppProductShowMesaComponent', () => {
  let component: AppProductShowMesaComponent;
  let fixture: ComponentFixture<AppProductShowMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductShowMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductShowMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
