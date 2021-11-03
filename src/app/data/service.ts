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

    async registerUser(email: string,password: string){
        var apiURL = "https://maalti.herokuapp.com/api/v1.0/register"
        const rawResponse = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:email, password:password})
        });
        const content = await rawResponse.json();
        if(content == true){
            alert("Glückwunsch! Dein Maalti Account wurde erstellt!")
        }else{
            alert("Die Registrierung konnte nicht abgschlossen werden.")
        }
        console.log(content)
        
    }

    async loginUser(email: string,password: string){
    
        var apiURL = "https://maalti.herokuapp.com/api/v1.0/login"
        const rawResponse = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:email, password:password})
        });
        
        var cookie = await rawResponse.text();

        if(cookie ==""){
            alert("Email oder Passwort sind falsch!")
            return;
        }

        document.cookie= ""+ email +"="+cookie;
        alert("Sie sind eingeloggt")
        this.router.navigate(['']);
        
        
    }


    
    
}
