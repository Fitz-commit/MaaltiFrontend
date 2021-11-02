import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()
export class Service {
    youtuberpreview:any;

    constructor(private http: HttpClient, private router: Router) { }

    async searchYoutuber(name:string){
        
        var apiURL = "https://maalti.herokuapp.com/api/v1.0/searchlistname?name=" + name

        
        const response = await fetch(apiURL)
        this.youtuberpreview = await response.json()
        
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['Search']));

    }

    
}
