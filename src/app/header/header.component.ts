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
  


  constructor(private service:Service) { }


  ngOnInit(): void {
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
