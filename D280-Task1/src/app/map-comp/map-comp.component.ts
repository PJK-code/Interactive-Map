import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-comp',
  standalone: true,
  imports: [],
  templateUrl: './map-comp.component.html',
  styleUrl: './map-comp.component.css'
})

export class MapCompComponent implements OnInit {
  
  // Variables to store country information
  countryName = 'Example Country';
  countryCapital = 'Example Capital';
  countryRegion = 'Example Region';
  incomeLevel = 'Example Income Level';
  latitude = 0;
  longitude = 0;

  constructor() { }

  ngOnInit(): void {}
}


  

