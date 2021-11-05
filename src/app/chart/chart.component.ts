import { Component, Input, OnInit, Output } from '@angular/core';

import { Service } from '../data/service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data: any;
  options: any;
  @Input() type: string = "";
  la: any[] = [];
  views: any[] = [];
  videos: any[] = [];


  constructor(private service: Service) { }

  ngOnInit(): void {
    this.videos = this.service.youtuber.videos.items


    this.videos.forEach(element => {
      this.la.push(element.snippet.title)
      this.views.push(element.statistics.viewCount)
    });

    this.data = {
      labels: this.la,
      datasets: [
        {
          data: this.views,
          backgroundColor: '#FFCE56',

        }
      ]
    };

    





  }

}
