import { Component, OnInit } from '@angular/core';
import { Service } from '../data/service';

@Component({
  selector: 'app-pwforgotten',
  templateUrl: './pwforgotten.component.html',
  styleUrls: ['./pwforgotten.component.css']
})
export class PwforgottenComponent implements OnInit {
  email=""

  constructor(private service:Service) { }

  ngOnInit(): void {
  }

  pwvergessen(){
    this.service.pwforgotten(this.email)
    this.email =""
  }
}
