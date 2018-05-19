import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaslistComponent } from './mesaslist.component';

describe('MesaslistComponent', () => {
  let component: MesaslistComponent;
  let fixture: ComponentFixture<MesaslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
