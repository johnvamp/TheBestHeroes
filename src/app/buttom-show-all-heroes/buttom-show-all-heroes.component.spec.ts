import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomShowAllHeroesComponent } from './buttom-show-all-heroes.component';

describe('ButtomShowAllHeroesComponent', () => {
  let component: ButtomShowAllHeroesComponent;
  let fixture: ComponentFixture<ButtomShowAllHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomShowAllHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomShowAllHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
