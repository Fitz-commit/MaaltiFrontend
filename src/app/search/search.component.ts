import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../data/service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  previews:any;
  relevance = "relevance"
  date = "date"
  viewCount ="viewCount"

  constructor(private service:Service) { }

  ngOnInit(): void {
    this.previews = this.service.youtuberpreview;

  }

  generateYTProfil(id:string, order:String){
    console.log(order)
    
    this.service.getYTProfil(id,order);
  
  }

 

}
