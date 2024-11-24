import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule]
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]]
    });
  }

  register() {
    if (this.form.valid) {
      this.http.post('http://localhost:3000/auth/register', this.form.value)
        .subscribe({
          next: (response) => {
            console.log('User registered successfully:', response);
            window.location.href = '/home';
          },
          error: (err) => {
            console.error('Registration failed:', err);
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }
}



/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/emailValidator';
import { matchPasswordsValidator } from '../../shared/matchPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup; // Само декларация

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Инициализация на формата
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      passGroup: this.fb.group(
        {
          password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]]
        },
        { validator: matchPasswordsValidator } // Валидация за съвпадение на паролите
      )
    });
  }

  regUser(): void {
    if (this.form.valid) {
      console.log('User registered:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}*/




/*import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'


import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { emailValidator } from '../../shared/emailValidator';
import { matchPasswordsValidator } from '../../shared/matchPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {


  form = this.fb.group({
    email: ["", [Validators.required, Validators.minLength(3), emailValidator('email')]],
    username: ["", [Validators.required, Validators.minLength(5)]],
    passGroup: this.fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      rePass: ["", [Validators.required,]]
    },
      {
        validators: [matchPasswordsValidator('password', 'rePass')],
      })
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  regUser(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, username, passGroup } = this.form.value;
    const password = passGroup?.password;

    this.authService.register(email!, username!, password!).subscribe(() => {
      this.router.navigate(['home']);
    });

    console.log(this.form.value);
  }
}*/
