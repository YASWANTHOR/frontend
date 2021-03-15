import { Component, Input, OnInit } from '@angular/core';
import {videoData} from '../model';
import { Router } from '@angular/router';
import { VideodataService} from '../videodata.service'

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.css']
})
export class VideocardComponent implements OnInit {

  @Input('videoData') videoData:any= {}
  constructor(private vds:VideodataService,private router:Router) { }

  ngOnInit(): void {
  }

   deleteVideo(id:number){
     this.vds.deleteVideoById(id).subscribe(
       data=>{
         console.debug("deleted susscesfully");
         this.router.navigate(['/videos'])
       },
       error=>console.log("exception occured")
     )
  
  }

}
  


