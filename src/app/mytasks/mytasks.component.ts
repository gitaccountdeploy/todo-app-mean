import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {Task} from './task';
import { stringify } from 'querystring';
@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {
  list:Task[];
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    var url = 'http://localhost:5000/api/alltasks';
    this.http.get<{ message:string,tasks: Task[] }>(url).subscribe(
      (body) => {
        this.list=body.tasks;
      }
    );

  }
  deleteItem(name){
 
     var url = 'http://localhost:5000/deletetask/'+name;
    this.http.get<{ message: string }>(url).subscribe(
      (body) => {
      
      }
    );
    var url = 'http://localhost:5000/api/alltasks';
    this.http.get<{ message: string, tasks: Task[] }>(url).subscribe(
      (body) => {
        this.list = body.tasks;
      }
    );
  }
}
