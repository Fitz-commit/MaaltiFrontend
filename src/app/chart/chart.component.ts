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
  comments: any[] = [];
  likes: any[] = [];
  dislikes:any [] = [];


  constructor(private service: Service) { }

  ngOnInit(): void {
    this.videos = this.service.youtuber.videos.items


    this.videos.forEach(element => {
      this.la.push(element.snippet.title)
      this.views.push(element.statistics.viewCount)
      this.comments.push(element.statistics.commentCount)
      this.likes.push(element.statistics.likeCount)
      this.dislikes.push(element.statistics.dislikeCount)
    });

    this.data = {
      labels: this.la,
      datasets: [
        {
          label: "Views",
          data: this.views,
          borderColor:'	#7b68ee',
          
          fill: false,
        },
        {
          label: "Comments",
          data: this.comments,
          borderColor:'#FCF330',
          fill: false,
        },
        {
          label: "Likes",
          data: this.likes,
          borderColor:'#3CFC30',
          fill: false,
        },
        {
          label: "Dislikes",
          data: this.dislikes,
          borderColor:'#EB411D',
          fill: false,
        },
      ]
    };


    this.options = {
      legend: {
        position: "top"
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false 
          }
        }],
      }
    };

  }

}
