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
  
  


  constructor(private service:Service) { }
  //ngonchanges?

  ngOnInit(): void {
    if(document.cookie == ""){
      this.loginbtn = "Anmelden"
    }
    if(document.cookie != ""){
      this.loginbtn = "Abmelden"
    }
  }

  getProfil(){
    if(document.cookie == ""){
      alert('Sie sind nicht eingeloggt!')
      return
    }
  }

  sendName(){
    this.service.searchYoutuber(this.search)
  }

  

  


  
}
