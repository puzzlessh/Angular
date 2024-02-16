import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AutData, AuthForm } from './input.type';

@Component({
  selector: 'ns-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  isPasswordVisible = false;

  form = new FormGroup<AuthForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  @Output() submitted = new EventEmitter<AutData>();

  get emailErrorMessage() {
    if (this.form.controls.email.hasError('required')) {
      return 'Email не может быть пустым';
    }

    if (this.form.controls.email.hasError('email')) {
      return 'Не корректный email';
    }

    return null;
  }

  get passwordInputType() {
    return this.isPasswordVisible ? 'password' : 'text';
  }

  onTogglePasswordVisible() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.submitted.emit(this.form.getRawValue());
    }
  }
}
