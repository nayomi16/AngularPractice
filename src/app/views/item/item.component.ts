import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
code:String;
name:String;
  constructor(private ar:ActivatedRoute) {
    // this.code=this.ar.snapshot.queryParamMap.get('code');
    // this.name=this.ar.snapshot.queryParamMap.get('name');
    ar.queryParamMap.subscribe((v)=>{
      this.code=v.get('code');
      this.name=v.get('name');
    })
  }

  ngOnInit(): void {
  }

}
