import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task04Component } from './task04.component';

describe('Task04Component', () => {
  let component: Task04Component;
  let fixture: ComponentFixture<Task04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task04Component]
    });
    fixture = TestBed.createComponent(Task04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
