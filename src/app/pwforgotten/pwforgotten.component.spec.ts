import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwforgottenComponent } from './pwforgotten.component';

describe('PwforgottenComponent', () => {
  let component: PwforgottenComponent;
  let fixture: ComponentFixture<PwforgottenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwforgottenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwforgottenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
