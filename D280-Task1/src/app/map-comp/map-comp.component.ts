import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-map-comp',
  standalone: true,
  imports: [NgIf],
  templateUrl: './map-comp.component.html',
  styleUrls: ['./map-comp.component.css']
})
export class MapCompComponent implements OnInit, AfterViewInit {
  @Output() submitted = new EventEmitter<string>();
  @Input() countryIdInputs: any = null; // This will hold the info of the clicked country


  countryId = ''; // This will hold the ID of the clicked country

  constructor(private countries: CountriesService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.interactiveMap();
  }

  interactiveMap(): void { // This will make the SVG map interactive
    const paths = document.querySelectorAll('svg path');

    paths.forEach(path => {
      (path as SVGPathElement).style.cursor = 'pointer';

      path.addEventListener('mouseenter', () => {
        (path as SVGPathElement).style.fill = 'lightpink';
      });

      path.addEventListener('mouseleave', () => {
        (path as SVGPathElement).style.fill = 'black';
      });

      path.addEventListener('click', (event: Event) => {
        this.onCountryClick(event);
      });
    });
  }

  onCountryClick(event: Event): void { 
    event.preventDefault();
    const path = event.target as SVGPathElement; // this will get the path id
    this.countryId = path.id;

    this.submitted.emit(this.countryId); 
    console.log('Clicked country ID:', this.countryId); // this will display the country ID in the console

    this.countries.getCountryData(this.countryId).subscribe((data: any) => { // this will use the service.ts to get the country data
      this.countryIdInputs = data[1][0];
      console.log('Selected country data:', this.countryIdInputs); // this will display the country data in the console
    });
  }
}

