import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormArray, FormBuilder, Validators} from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';
import { videoData } from '../model';
import {VideodataService} from '../videodata.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  video= new videoData();
  constructor( private productdataService: VideodataService ,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let currentId = this.activatedRoute.snapshot.params.id;
    this.productdataService.getVideoById(currentId).subscribe(
      
      data=>{
        console.log("data received");
        this.video=data;
      },
      error=>console.log("exception occured")
      
    )
    
  }
  updatevideoformsubmit(){
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
