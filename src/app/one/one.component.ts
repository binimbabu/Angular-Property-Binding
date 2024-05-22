import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  title = 'Bini Babu'; 
  src = 'https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png';  
  booleanValue = 'true'; 
  constructor() { }

  ngOnInit(): void {
  }

}
