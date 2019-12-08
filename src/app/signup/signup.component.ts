import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  username: string;
  password: string;


  ngOnInit() {
    this.username = "";
    this.password = "";
  }
  signup() {
    var url = 'http://localhost:5000/api/signup/' + this.username + '/' + this.password;
    this.http.get<{ result: string }>(url).subscribe(
      (body) => {
        if (body.result == '1') {
          alert("User Registered");
          window.location.href = "/login";
        }
      }
    );

  }
}
