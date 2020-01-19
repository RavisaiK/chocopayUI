import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

signupForm : FormGroup;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('',[Validators.required,Validators.required]),
      users: new FormGroup({
        name:new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
      })
    });
  }

  register() {
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
  public login() {
    this.router.navigate(['/login'])
  }
}
