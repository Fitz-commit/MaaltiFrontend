import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../data/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email="";
  password="";

  lemail="";
  lpassword="";
  

  constructor(private service:Service, private router:Router) { }

  ngOnInit(): void {
    
    
  }

  registrieren(){
    if(this.email =="" || this.password==""){
      alert("Bitte Daten eingeben! ")
      return;
    }
    this.service.registerUser(this.email,this.password)
    this.email="";
    this.password="";

  }

  einloggen(){

    if(this.lemail =="" || this.lpassword==""){
      alert("Bitte Daten eingeben! ")
      return;
    }

    this.service.loginUser(this.lemail,this.lpassword)
    this.lemail="";
    this.lpassword="";

  }

  

}
