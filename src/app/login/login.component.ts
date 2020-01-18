import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data = []
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.getDetails().subscribe((response:any[])=>{
      this.data= response['data'];
    })
  }

}
