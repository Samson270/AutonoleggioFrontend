import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoreComponent } from './contatore.component';

describe('ContatoreComponent', () => {
  let component: ContatoreComponent;
  let fixture: ComponentFixture<ContatoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoreComponent]
    });
    fixture = TestBed.createComponent(ContatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
