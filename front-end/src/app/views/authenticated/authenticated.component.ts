import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authenticated',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.scss',
})
export class AuthenticatedComponent {}
