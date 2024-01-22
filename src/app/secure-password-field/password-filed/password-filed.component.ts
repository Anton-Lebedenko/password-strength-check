import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: 'app-password-filed',
  templateUrl: './password-filed.component.html',
  styleUrl: './password-filed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordFiledComponent {
  public passwordControl: FormControl = new FormControl('', Validators.required);
  public password$: Observable<string> = this.passwordControl.valueChanges;
}
