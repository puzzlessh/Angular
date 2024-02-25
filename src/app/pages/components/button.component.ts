import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'ns-user-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class UserButtonComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}

  fetchUsers() {
    if (this.authService.authToken !== null) {
      console.log('токен:', this.authService.authToken);
      this.userService.getUsers(this.authService.authToken).subscribe(
        (users) => {
          console.log('Пользователи:', users);
        },
        (error) => {
          console.error('Ошибка:', error);
        },
      );
    } else {
      console.log('error token');
    }
  }

  // this.authService.getToken('admin@admin.ru', 'admin').subscribe(
  //   (token) => {
  //     console.log('токен:', token);
  //     this.userService.getUsers(token).subscribe(
  //       (users) => {
  //         console.log('Пользователи:', users);
  //       },
  //       (error) => {
  //         console.error('Ошибка:', error);
  //       },
  //     );
  //   },
  //   (error) => {
  //     console.error('Ошибка:', error);
  //   },
  // );
}
