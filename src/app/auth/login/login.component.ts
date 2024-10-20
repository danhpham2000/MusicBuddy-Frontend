import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isRegistering = false;
  loginEmail = '';
  loginPassword = '';
  registerName = '';
  registerEmail = '';
  registerPassword = '';

  toggleForm() {
    this.isRegistering = !this.isRegistering;
  }

  onLogin() {
    // Implement login logic
    console.log('Login attempt', this.loginEmail, this.loginPassword);
  }

  onRegister(e: any) {
    // Implement registration logic
    e.preventDefault();
    console.log(
      'Register attempt',
      this.registerName,
      this.registerEmail,
      this.registerPassword
    );
  }
}
