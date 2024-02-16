import { Component, Input } from '@angular/core';
import { InputComponent } from './input/input.component';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'ns-auth',
  standalone: true,
  imports: [InputComponent, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  // emailV: string = '';
  // passwordV: string = '';
  // submitForm() {
  //   console.log('Email:', this.emailV);
  //   console.log('Password:', this.passwordV);
  // }

  receivedData: { email: string; password: string } = {
    email: '',
    password: '',
  };

  loggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  receiveSubmitedForm(SubmitedForm: { email: string; password: string }) {
    this.receivedData = SubmitedForm;
    console.log('Received Data:', this.receivedData);
    if (this.authService.login(SubmitedForm.email, SubmitedForm.password)) {
      this.loggedIn = true;
      console.log('Logged in successfully!');
    } else {
      alert('error password ');
    }
  }
}
