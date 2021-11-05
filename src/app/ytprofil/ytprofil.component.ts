import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Service } from '../data/service';

@Component({
  selector: 'app-ytprofil',
  templateUrl: './ytprofil.component.html',
  styleUrls: ['./ytprofil.component.css']
})
export class YtprofilComponent implements OnInit {
  youtuber: any
  jugend: any
  datum: any
  topics: any[] = []



  constructor(private service: Service) { }

  async ngOnInit(): Promise<void> {
    this.youtuber = this.service.youtuber;

    this.youtuber.topics.forEach(element => {
      this.topics.push(element.substring(30).replace(/_/g, " "))
    });


    if (this.service.youtuber.madeforkids) {
      this.jugend = "Ja";
    } else {
      this.jugend = "Nein"
    }

    this.datum = this.service.youtuber.creationdate.substring(0, this.service.youtuber.creationdate.length - 14);


    //Das Hier muss unbedingt weg
    const response = await fetch("assets/channellistid.json");
    this.youtuber = await response.json();

  }

  doLink() {
    window.location.href = this.youtuber.customURL;

  }





}
