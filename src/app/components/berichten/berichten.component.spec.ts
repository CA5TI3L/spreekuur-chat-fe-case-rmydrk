import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerichtenComponent } from './berichten.component';

describe('BerichtenComponent', () => {
  let component: BerichtenComponent;
  let fixture: ComponentFixture<BerichtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerichtenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerichtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
