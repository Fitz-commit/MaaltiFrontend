import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()
export class Service {
    youtuberpreview:any;

    constructor(private http: HttpClient) { }

    async searchYoutuber(name:string){
        
        var apiURL = "https://maalti.herokuapp.com/api/v1.0/searchlistname?name=" + name
        const response = await fetch(apiURL)
        this.youtuberpreview = await response.json()
    }

    
}
