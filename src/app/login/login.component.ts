import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {

  }
  username: string;
  password: string;
  ngOnInit() {
    this.username = "";
    this.password = "";
  }
  signup() {
    var url = 'http://localhost:5000/api/login/' + this.username + '/' + this.password;
    this.http.get<{ result: string }>(url).subscribe(
      (body) => {
        if (body.result == '1') {

          this.router.navigate(['home']);
        }
        else {
          alert("Incorrect Username or Password");
        }
      }
    );

  }
}


