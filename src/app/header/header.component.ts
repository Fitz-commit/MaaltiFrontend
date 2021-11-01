import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../data/service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = "Maalti";
  search = '';
  private service!: Service;

  constructor() { }


  ngOnInit(): void {
  }

  getProfil(){
    if(document.cookie == ""){
      alert('Sie sind nicht eingeloggt!')
      return
    }
  }

  getYoutuber(){
    this.service.searchYoutuber(this.search).subscribe(
      response => {console.log(response)}
    )
  }

  
}
