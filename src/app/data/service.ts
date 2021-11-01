import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()
export class Service {

    constructor(private http: HttpClient) { }

    searchYoutuber(name:string){
        return this.http.get('http:///https://maalti.herokuapp.com/api/v1.0/searchlistname?name=' + name);
    }

    
}
