import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { videoData } from '../model';
import {VideodataService} from '../videodata.service'

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {
  video= new videoData();
  constructor( private productdataService: VideodataService ,private router:Router) { }

  ngOnInit(){
    
  }
  addvideoformsubmit(){
    this.productdataService.addVideoToRemote(this.video).subscribe
    (
      data=>
      {
        console.log("data added succesfully");
        this.router.navigate(['videos'])
      },
      error=>console.log("error")
    )

  }
  gotolist(){
    console.log("go back");
    this.router.navigate(['videos']); 
   }
}
