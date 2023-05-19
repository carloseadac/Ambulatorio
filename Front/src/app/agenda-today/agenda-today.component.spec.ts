import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaTodayComponent } from './agenda-today.component';

describe('AgendaTodayComponent', () => {
  let component: AgendaTodayComponent;
  let fixture: ComponentFixture<AgendaTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
