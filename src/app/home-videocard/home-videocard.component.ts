import { Component, Input, OnInit } from '@angular/core';
import{videoData } from '../model';
import{VideodataService} from '../videodata.service'

@Component({
  selector: 'app-home-videocard',
  templateUrl: './home-videocard.component.html',
  styleUrls: ['./home-videocard.component.css']
})
export class HomeVideocardComponent implements OnInit {

  @Input('videoData') videoData:Partial<videoData> = {}
  constructor(private vds:VideodataService) { }

  ngOnInit(): void {
  }

}
