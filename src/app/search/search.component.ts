import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../data/service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  previews:any;

  constructor(private service:Service) { }

  ngOnInit(): void {
    this.previews = this.service.youtuberpreview;

  }

  generateYTProfil(id:string){
    var URL= "https://maalti.herokuapp.com/api/v1.0/channellistid?id=" + id
    this.service.getYTProfil(URL);
  
  }

 

}
