import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  // emailV: string = '';
  // passwordV: string = '';

  hide = true;
  // emailV = new FormControl('', [Validators.required, Validators.email]);
  // passwordValidator = new FormControl('');
  // password = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(8),
  // ]);

  myForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  // myForm: FormGroup = new FormGroup({
  //   password: new FormControl(''),
  // });

  getErrorEmailMessage() {
    // if (this.emailV.hasError('required')) {
    //   return 'You must enter a value';
    // }
    // return this.emailV.hasError('email') ? 'Not a valid email' : '';
  }

  @Output() SubmitedForm = new EventEmitter<{
    email: string;
    password: string;
    // data: any[];
  }>();

  // @Input() emailV: string = '';
  // @Input() passwordV: string = '';
  submitForm() {
    // console.log(this.myForm);

    // console.log('Email:', this.emailV);
    // console.log('Password:', this.passwordV);
    // this.formData.emit({ email: this.emailV, password: this.passwordV });
    // console.log(this.myForm);
    console.log(this.myForm.get('email'));
    if (this.myForm.touched && this.myForm.status === 'VALID') {
      this.SubmitedForm.emit({
        email: this.myForm.value.email,
        password: this.myForm.value.password,
      });
    }
    // worked
    // if (!(this.email.value === '' || this.password.value === '')) {
    //   this.SubmitedForm.emit({
    //     email: this.email.value || '',
    //     password: this.password.value || '',
    //   });
    // } else {
    //   return;
    // }

    // email: this.email.value || '',
    // ,

    // console.log(this.email.value);
    // console.log(this.password.value);

    // console.log(this.myForm.value.password);
  }
}
