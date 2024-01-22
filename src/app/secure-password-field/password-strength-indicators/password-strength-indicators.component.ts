import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { getIndicatorsColorsRule, PasswordStrengthStatus } from "../utils";

@Component({
  selector: 'app-password-strength-indicators',
  templateUrl: './password-strength-indicators.component.html',
  styleUrl: './password-strength-indicators.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordStrengthIndicatorsComponent implements OnChanges {
  @Input() password: string | null;

  public indicatorColorsSource: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(getIndicatorsColorsRule(PasswordStrengthStatus.Empty));
  public indicatorColors$: Observable<string[]> = this.indicatorColorsSource.asObservable();

  public ngOnChanges({ password }: SimpleChanges): void {
    this.indicatorColorsSource.next(
      getIndicatorsColorsRule(
        this.calculatePasswordStrength(password.currentValue)
      )
    );
  }

  private calculatePasswordStrength(password: string): PasswordStrengthStatus {
    if (!password || password.length === 0) {
      return PasswordStrengthStatus.Empty;
    }

    if (password.length < 8) {
      return PasswordStrengthStatus.NotEnoughLength;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return PasswordStrengthStatus.Strong;
    } else if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
      return PasswordStrengthStatus.Medium;
    } else {
      return PasswordStrengthStatus.Easy;
    }
  }
}
