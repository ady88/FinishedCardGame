import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSelectModalComponent } from './one-select-modal.component';

describe('OneSelectModalComponent', () => {
  let component: OneSelectModalComponent;
  let fixture: ComponentFixture<OneSelectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneSelectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
