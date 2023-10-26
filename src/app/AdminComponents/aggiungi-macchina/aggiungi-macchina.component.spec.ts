import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiMacchinaComponent } from './aggiungi-macchina.component';

describe('AggiungiMacchinaComponent', () => {
  let component: AggiungiMacchinaComponent;
  let fixture: ComponentFixture<AggiungiMacchinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiMacchinaComponent]
    });
    fixture = TestBed.createComponent(AggiungiMacchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
