import { Component, inject } from '@angular/core';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { AutData } from './loginForm/loginForm.type';
import { HttpClientModule } from '@angular/common/http';
import { UserButtonComponent } from '../components/button.component';

@Component({
  selector: 'ns-auth',
  standalone: true,
  imports: [
    LoginFormComponent,
    CommonModule,
    HttpClientModule,
    UserButtonComponent,
  ],
  templateUrl: './loginPage.component.html',
  styleUrl: './loginPage.component.css',
})
export class LoginPageComponent {
  private authService = inject(AuthService);

  get authToken() {
    return this.authService.authToken;
  }

  get isAuth() {
    return this.authService.isAuth;
  }

  get email() {
    return this.authService.email;
  }
  getToken(data: AutData) {
    const result = this.authService.getToken(data.email, data.password);

    if (!result) {
      alert('Нет такого пользователя');
    }
  }
  onLogin(data: AutData) {
    const result = this.authService.login(data.email, data.password);

    if (!result) {
      alert('Нет такого пользователя');
    }
  }
}
