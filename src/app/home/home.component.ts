import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search = "";
  itemImageUrl: any ='../assets/img/milky-way-g21700d2ed_1920.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
