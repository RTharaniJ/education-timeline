import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  task: any = null;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('https://gist.githubusercontent.com/AmatullahD/82abe912ca2480efc27fb43beb646ba4/raw/924f9a950e8d4b720ac7296973e103b82a5b6d7c/task.json')
      .subscribe(res => {
        this.task = res;
        console.log(res);
      });

  }
}
