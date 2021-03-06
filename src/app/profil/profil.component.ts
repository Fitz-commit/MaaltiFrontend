import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../data/service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profildata:any;
  email:any;
  favoriten:any[]=[];

  constructor(private service:Service,private router: Router) { }

  ngOnInit(): void {
    
    this.profildata = this.service.userprofil;
    this.favoriten =  this.profildata.favoriten;
    this.email = document.cookie.substring(0,document.cookie.indexOf("="))
    console.log(this.profildata)



  }


  generateYTProfil(creatorid:string){
    this.service.getYTProfil(creatorid, "date");
  }

  deleteFavoriten(creatorid:string){
    
    this.service.deleteFavorit(creatorid)
    
    
    
  }
}
