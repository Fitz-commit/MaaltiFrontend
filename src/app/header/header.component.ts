import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = "Maalti"

  constructor() { }


  ngOnInit(): void {
  }

  getProfil(){
    if(document.cookie == ""){
      alert('Sie sind nicht eingeloggt!')
      return
    }



  }


}
