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
    youtuberpreview: any;
    youtuber: any;


    constructor(private http: HttpClient, private router: Router) { }

    async searchYoutuber(name: string) {

        //var apiURL = "https://maalti.herokuapp.com/api/v1.0/searchlistname?name=" + name
        //const response = await fetch(apiURL)
        //this.youtuberpreview = await response.json()
        
        const response =await fetch("assets/searchlistname.json");
        this.youtuberpreview = await response.json()



        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate(['Search']));

    }

    async getYTProfil(id: string) {

        const response =await fetch("assets/channellistid.json");
        this.youtuber = await response.json()
        


        //var apiURL= "https://maalti.herokuapp.com/api/v1.0/channellistid?id=" + id
        //const rawResponse = await fetch(apiURL);

        //this.youtuber = await rawResponse.json();


        this.router.navigate(['YTProfil']);

    }

    async registerUser(email: string, password: string) {
        var apiURL = "https://maalti.herokuapp.com/api/v1.0/register"
        const rawResponse = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });
        const content = await rawResponse.json();
        if (content == true) {
            alert("Glückwunsch! Dein Maalti Account wurde erstellt!")
        } else {
            alert("Die Registrierung konnte nicht abgschlossen werden.")
        }

    }

    async loginUser(email: string, password: string) {

        var apiURL = "https://maalti.herokuapp.com/api/v1.0/login"
        const rawResponse = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });

        var cookie = await rawResponse.text();

        if (cookie == "") {
            alert("Email oder Passwort sind falsch!")
            return;
        }

        document.cookie = "=" + cookie;
        alert("Sie sind eingeloggt")
        this.router.navigate(['']);


    }

    async logoutUser(cookie: string) {

        var apiURL = "https://maalti.herokuapp.com/api/v1.0/logout?email=" + cookie;
        const rawResponse = await fetch(apiURL);

        var response = await rawResponse.json();

        if (response == true) {
            alert("Deine Passwort wird zurückgesetzt. Wir melden uns bei dir.")
        } else {
            alert("Email wurde nicht gefunden. Überprüfe deine Angaben erneut.")
        }

    }

    async pwforgotten(email: string) {

        var apiURL = "https://maalti.herokuapp.com/api/v1.0/user/pwforgotten?email=" + email;
        const rawResponse = await fetch(apiURL);

        var response = await rawResponse.json();

        if (response == true) {
            alert("Deine Passwort wird zurückgesetzt. Wir melden uns bei dir.")
        } else {
            alert("Email wurde nicht gefunden. Überprüfe deine Angaben erneut.")
        }


    }






}
