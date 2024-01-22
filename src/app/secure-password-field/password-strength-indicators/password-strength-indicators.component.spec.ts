import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthIndicatorsComponent } from './password-strength-indicators.component';

describe('PasswordStrengthIndicatorsComponent', () => {
  let component: PasswordStrengthIndicatorsComponent;
  let fixture: ComponentFixture<PasswordStrengthIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthIndicatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStrengthIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
