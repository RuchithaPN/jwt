import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
 

  constructor(private authService: AuthService, 
    private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
      const { username, email, password } = this.form;
  
      this.authService.register(username, email, password).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.router.navigate(['login']);
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
      }
    );
  }

}
