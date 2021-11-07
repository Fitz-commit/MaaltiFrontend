import { Component, OnInit } from '@angular/core';
import { Service } from '../data/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search = "";
  itemImageUrl: any ='../assets/img/milky-way-g21700d2ed_1920.jpg';

  constructor(private service:Service) { }

  ngOnInit(): void {
    this.service.isSearchVisible =true;
    this.service.isSendNameVisible =true;
  }

}
