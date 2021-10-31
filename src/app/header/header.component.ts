import { Component, OnInit } from '@angular/core';



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

  searchYoutuber(){
    console.log('test')
  }

  login(){

  }

  profil(){
    
  }

}
