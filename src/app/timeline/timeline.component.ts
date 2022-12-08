import { Component,Input,OnInit } from '@angular/core';

interface IEducation{
  school:string,
  program:string,
  from:number,
  to:number,
  percentage:number
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

@Input () data:IEducation[]=[];


constructor(){}
  ngOnInit(): void {

  
}
}
