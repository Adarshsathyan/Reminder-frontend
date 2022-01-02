import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner"; 





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
  
export class DashboardComponent implements OnInit {


  constructor(private SpinnerService: NgxSpinnerService, public router:Router) { }

  ngOnInit(): void {
    // this.load()
  }
  // load() {
  //   this.SpinnerService.show(); 
  //   setTimeout(()=>{                           // <<<---using ()=> syntax
  //     this.SpinnerService.hide()
  // }, 3000);
    
  // }
 
}
