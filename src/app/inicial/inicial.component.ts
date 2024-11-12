import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})
export class InicialComponent {
  constructor(private router: Router) {}

  navegarParaLogin() {
    this.router.navigate(['/login']);
  }
}
