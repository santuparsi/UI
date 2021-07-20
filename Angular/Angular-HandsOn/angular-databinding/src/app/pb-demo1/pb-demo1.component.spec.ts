import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbDemo1Component } from './pb-demo1.component';

describe('PbDemo1Component', () => {
  let component: PbDemo1Component;
  let fixture: ComponentFixture<PbDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbDemo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
