import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task10Component } from './task10.component';

describe('Task10Component', () => {
  let component: Task10Component;
  let fixture: ComponentFixture<Task10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task10Component]
    });
    fixture = TestBed.createComponent(Task10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
