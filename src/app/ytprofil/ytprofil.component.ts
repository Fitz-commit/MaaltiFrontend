import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Service } from '../data/service';

@Component({
  selector: 'app-ytprofil',
  templateUrl: './ytprofil.component.html',
  styleUrls: ['./ytprofil.component.css']
})
export class YtprofilComponent implements OnInit {
  youtuber: any
  


  constructor(private service: Service) { }

  async ngOnInit(): Promise<void> {
    this.youtuber = this.service.youtuber;


    //Das Hier muss unbedingt weg
    const response = await fetch("assets/channellistid.json");
    this.youtuber = await response.json();
    

  }



  


}
