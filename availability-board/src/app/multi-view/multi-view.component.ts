import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-multi-view',
  templateUrl: './multi-view.component.html',
  styleUrls: ['./multi-view.component.scss']
})
export class MultiViewComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let available = document.getElementsByClassName('available');
    let moderate = document.getElementById('moderate');
    let unavailable = document.getElementById('closed');
    let bubble = document.getElementById('bubble');
   
   

  }

  
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  

}
