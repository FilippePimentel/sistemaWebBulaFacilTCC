import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBulaFacilComponent } from './cadastro-bula-facil.component';

describe('CadastroBulaFacilComponent', () => {
  let component: CadastroBulaFacilComponent;
  let fixture: ComponentFixture<CadastroBulaFacilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroBulaFacilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBulaFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
