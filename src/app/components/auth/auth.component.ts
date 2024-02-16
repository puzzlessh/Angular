import { Component, inject } from '@angular/core';
import { InputComponent } from './input/input.component';
import { AuthService } from './service/auth.service';
import { CommonModule } from '@angular/common';
import { AutData } from './input/input.type';

@Component({
  selector: 'ns-auth',
  standalone: true,
  imports: [InputComponent, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private authService = inject(AuthService);

  get isAuth() {
    return this.authService.isAuth;
  }

  get email() {
    return this.authService.email;
  }

  onLogin(data: AutData) {
    const result = this.authService.login(data.email, data.password);

    if (!result) {
      alert('Нет такого пользователя');
    }
  }
}
