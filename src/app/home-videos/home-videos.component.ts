import { Component, OnInit } from '@angular/core';
import {VideodataService } from '../videodata.service'

@Component({
  selector: 'app-home-videos',
  templateUrl: './home-videos.component.html',
  styleUrls: ['./home-videos.component.css']
})
export class HomeVideosComponent implements OnInit {

  dataListing:Array<Object>=[];
  constructor(private dataservice:VideodataService) { }

  ngOnInit(): void {
    this.dataservice.fetchProductListFromRemote().subscribe((data) =>{
      this.dataListing = data
  });
    
  
}
}