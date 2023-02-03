import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Films3Component } from './films3.component';

describe('Films3Component', () => {
  let component: Films3Component;
  let fixture: ComponentFixture<Films3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Films3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Films3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
