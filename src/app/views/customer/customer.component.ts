import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
id:String;
name:String;
  constructor(private router:Router, private ar:ActivatedRoute) {
   // this.id = this.ar.snapshot.paramMap.get('id');
   //  this.name = this.ar.snapshot.paramMap.get('name');
    ar.paramMap.subscribe((v)=>{
      this.id=v.get('id');
      this.name=v.get('name');
    });
  }

  ngOnInit(): void {
  }
  navigateToItem(){
    this.router.navigate(['/item'], {
      queryParams: {
          code:"I001",
          name: "lux"
      }

    });


  }
}
