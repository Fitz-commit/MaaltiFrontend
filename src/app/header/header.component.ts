import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../data/service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = "Maalti";
  search = "";
  loginbtn ="";
  
  
  


  constructor(public service:Service,private router: Router) { }
  

  ngOnInit(): void {
    
  }

  getProfil(){
    
    const alles = document.cookie
    const cookie = document.cookie.substring(document.cookie.indexOf("=") + 1)
    if (cookie ==""){
      alert("Bitte log dich zuerst ein !")
      return
    }

    this.service.getUserProfil(cookie);
    
  }

  sendName(){
    this.service.searchYoutuber(this.search)
  }

  loginlogout(){
    debugger
    const cookie = document.cookie.substring(document.cookie.indexOf("=") + 1)
    console.log(cookie)
    if(cookie == ""){
      this.router.navigate(['Login']);
    }else{
      this.service.logoutUser(cookie)
    }
  }

  

  


  
}
