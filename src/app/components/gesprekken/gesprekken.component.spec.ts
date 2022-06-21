import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesprekkenComponent } from './gesprekken.component';

describe('GesprekkenComponent', () => {
  let component: GesprekkenComponent;
  let fixture: ComponentFixture<GesprekkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesprekkenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GesprekkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
