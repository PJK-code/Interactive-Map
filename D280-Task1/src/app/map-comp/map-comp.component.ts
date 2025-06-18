import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-comp',
  standalone: true,
  imports: [],
  templateUrl: './map-comp.component.html',
  styleUrl: './map-comp.component.css'
})

export class MapCompComponent implements OnInit {

// added a mouse click event listener to each pathway.
interactiveMap () {
 const paths = document.querySelectorAll('path');
//changed mouse cursor to pointer when hovering over a country
    paths.forEach(path => {
    (path as SVGPathElement).style.cursor = 'pointer';

// added effect to fill over clicked country
    path.addEventListener('mouseenter', function () {
    (path as SVGPathElement).style.fill = 'lightpink';
    });

// added effect to fill back to black when mouse leaves the country
      path.addEventListener('mouseleave', function () {
      (path as SVGPathElement).style.fill = 'black';
  });
});
}
  
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


  

