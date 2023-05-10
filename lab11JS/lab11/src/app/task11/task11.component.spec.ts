import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task11Component } from './task11.component';

describe('Task11Component', () => {
  let component: Task11Component;
  let fixture: ComponentFixture<Task11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task11Component]
    });
    fixture = TestBed.createComponent(Task11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
