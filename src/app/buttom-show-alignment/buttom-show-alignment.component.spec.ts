import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtomShowAlignmentComponent } from './buttom-show-alignment.component';

describe('ButtomShowAlignmentComponent', () => {
  let component: ButtomShowAlignmentComponent;
  let fixture: ComponentFixture<ButtomShowAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtomShowAlignmentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomShowAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
