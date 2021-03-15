import { Component, OnInit } from '@angular/core';
import {VideodataService } from '../videodata.service'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  dataListing:Array<Object>=[];
  constructor(private dataservice:VideodataService) { }

  ngOnInit(): void {
    this.dataservice.fetchProductListFromRemote().subscribe((data) =>{
      this.dataListing = data
  });
    
  
}
}

