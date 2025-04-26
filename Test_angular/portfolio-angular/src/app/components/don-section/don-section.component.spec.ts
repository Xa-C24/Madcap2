import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonSectionComponent } from './don-section.component';

describe('DonSectionComponent', () => {
  let component: DonSectionComponent;
  let fixture: ComponentFixture<DonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
