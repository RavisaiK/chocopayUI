import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data = []
  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.getDetails().subscribe((response:any[])=>{
      this.data= response['data'];
    })
  }

  public signup() {
    this.router.navigate(['/signup'])
  }

}
