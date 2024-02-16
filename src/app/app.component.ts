import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthComponent } from './components/auth/auth.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [MatSlideToggleModule, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mybase';
}
