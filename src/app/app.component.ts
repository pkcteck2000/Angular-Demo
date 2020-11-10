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

  country = ['india', 'usa', 'england'];

  myLightGreen = '#45CE30';
  myPurple = '#8B78E6';

  class1 = 'one';
  class2 = 'two';

  myHeader = "Premnath"
}
