import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myLightGreen = '#45CE30';
  myPurple = '#8B78E6';
  
  colorObj = {
      'color': '#fff',
      'background-color' : '#f00',
      'padding': '20px'
  };

  country = ['india', 'usa', 'england'];

  class1 = 'one';
  class2 = 'two';

  myHeader = "Angular";
  
  fromHeader = "Hello World 1";

  addItem(newItem: string) {
    this.fromHeader = newItem;
  }
  
}
