import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFiledComponent } from './password-filed.component';

describe('PasswordFiledComponent', () => {
  let component: PasswordFiledComponent;
  let fixture: ComponentFixture<PasswordFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordFiledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
