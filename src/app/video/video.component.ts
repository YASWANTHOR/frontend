import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { VideodataService} from "../videodata.service";
import {videoData} from '../model'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoObj:any ={};
  constructor(private activatedRoute:ActivatedRoute,private dataservice:VideodataService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id)
    this.videoObj = this.dataservice.getVideoById(this.activatedRoute.snapshot.params.id)
  }

}