import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapCompComponent } from './map-comp/map-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , MapCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'D280-Task1';
}
