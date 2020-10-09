import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomInitComponent } from './buttom-init.component';

describe('ButtomInitComponent', () => {
  let component: ButtomInitComponent;
  let fixture: ComponentFixture<ButtomInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
