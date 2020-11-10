import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  colorObj = {
      'color': '#fff',
      'background-color' : '#f00',
      'padding': '20px'
  };

  lightGreen = '#45CE30';
  purple = '#8B78E6';
}
