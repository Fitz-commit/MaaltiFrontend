import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../data/service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  previews:any = this.service.youtuberpreview;

  constructor(private service:Service) { }

  ngOnInit(): void {
   
  }

 

}
