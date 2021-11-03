import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtprofilComponent } from './ytprofil.component';

describe('YtprofilComponent', () => {
  let component: YtprofilComponent;
  let fixture: ComponentFixture<YtprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
