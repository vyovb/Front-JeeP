import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required]],
      ConfirmPassword: [null, [Validators.required]],
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    console.log("----------------------- Button works");
    const Password = this.signupForm.get('Password')?.value;
    const ConfirmPassword = this.signupForm.get('ConfirmPassword')?.value;

    if (Password !== ConfirmPassword) {
      this.snackBar.open('Passwords do not match.', 'Close', { 
        duration: 5000, 
        panelClass: 'error-snackBar' 
      });
      return;
    }

    this.authService.signup(this.signupForm.value).subscribe({
      next: (response) => {
        this.snackBar.open('Sign up successful', 'Close', { 
          duration: 5000 
        });
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        this.snackBar.open('Sign up failed. Please try again.', 'Close', { 
          duration: 5000, 
          panelClass: 'error-snackbar' 
        });
      }
    });
  }
}
