import { Component } from '@angular/core';
import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [LoginPageComponent, NgClass, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
