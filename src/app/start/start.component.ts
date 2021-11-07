import { Component, OnInit } from '@angular/core';
import { Service } from '../data/service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  

  constructor(private service:Service) { }

  ngOnInit(): void {
    if(document.cookie.substring(document.cookie.indexOf("=") + 1) == ""){
      this.service.isProfilVisible = false;
    }else{
      this.service.isProfilVisible = true;
    }
  }

  twitch(){
    
    alert("Feature nicht Verfügbar")
  }

}
