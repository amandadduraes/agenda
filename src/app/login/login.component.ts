import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Subject } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, ButtonModule, CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;
  email = '';
  password = '';
  captchaAnswer = '';
  captchaQuestion = '';
  correctAnswer: number = 0;

  showTwoFactor = false;
  authCode = '';
  generatedAuthCode = '';
  showForgotPasswordModal = false;

  private emailInputSubject = new Subject<string>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.generateCaptcha();

    this.emailInputSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((email) => {
      this.checkEmail(email);
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onEmailInput(email: string) {
    this.emailInputSubject.next(email);
  }

  checkEmail(email: string) {
    console.log(`Verificando e-mail: ${email}`);
  }


  generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    this.captchaQuestion = `Quanto é ${num1} + ${num2}?`;
    this.correctAnswer = num1 + num2;
  }

  onSubmit() {
    if (parseInt(this.captchaAnswer) !== this.correctAnswer) {
      alert('CAPTCHA incorreto, tente novamente.');
      this.generateCaptcha();
      return;
    }

    this.showTwoFactor = true;
    this.generatedAuthCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Seu código de autenticação é: ${this.generatedAuthCode}`);
  }

  validateTwoFactorCode() {
    if (this.authCode === this.generatedAuthCode) {
      alert('Autenticação bem-sucedida!');
      this.router.navigate(['/home']).then(() => {
      }).catch((err) => {
        console.error('Erro ao navegar:', err);
      });
    } else {
      alert('Código incorreto. Tente novamente.');
    }
  }


  openForgotPasswordModal() {
    if (this.email) {
      this.showForgotPasswordModal = true;
    } else {
      alert('Por favor, insira um e-mail antes de solicitar a recuperação de senha.');
    }
  }

  closeForgotPasswordModal() {
    this.showForgotPasswordModal = false;
  }
}
