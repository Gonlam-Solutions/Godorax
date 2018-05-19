import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaShowComponent } from './mesa-show.component';

describe('MesaShowComponent', () => {
  let component: MesaShowComponent;
  let fixture: ComponentFixture<MesaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
