import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  task: string;

  constructor(private http: HttpClient, private router: Router) {

  }
  ngOnInit() {
    this.task = "";
  }
  addTask() {
    var url = 'http://localhost:5000/api/addtask/' + this.task;
    this.http.get<{ result: string }>(url).subscribe(
      (body) => {
        if (body.result == '1') {
        setTimeout(() => {
          this.router.navigate(['mytasks']);
        }, 1000);
          
          this.task = "";
        }
        else {
          alert("Error");
        }
      }
    );

  }
}
