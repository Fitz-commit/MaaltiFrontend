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
    
    this.service.getYTProfil(id);
  
  }

 

}
