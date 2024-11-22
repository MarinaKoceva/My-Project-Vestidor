import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  logUser() {
    if (this.form.valid) {
      console.log('User logged in:', this.form.value);
    }
  }
}


/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/emailValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup; // Оставяме го необработен при декларацията

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Инициализация на формата в ngOnInit
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]]
    });
  }

  logUser(): void {
    if (this.form.valid) {
      console.log('Login data:', this.form.value);
    }
  }
}
*/

/*import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { emailValidator } from '../../shared/emailValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    email: ["", [Validators.required, emailValidator('email')]],
    password: ["", Validators.required],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  logUser(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.authService.login(email!, password!).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}*/
