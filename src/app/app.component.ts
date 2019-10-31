import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  gridValue = null;
  gridAsImage = null;

  defaultJson = [ { "x": 0, "y": 0, "m": false }, { "x": 0, "y": 0, "m": false }, { "x": 0, "y": 0, "m": false }, { "x": 0, "y": 0, "m": false }, { "x": 0, "y": 0, "m": false }, { "x": 0, "y": 0, "m": false }, { "x": 0, "y": 0, "m": false }, { "x": 1, "y": 0, "m": false }, { "x": 1, "y": 0, "m": false }, { "x": 1, "y": 0, "m": true }, { "x": 1, "y": 0, "m": false }, { "x": 1, "y": 0, "m": true }, { "x": 1, "y": 0, "m": false }, { "x": 1, "y": 0, "m": false }, { "x": 2, "y": 0, "m": false }, { "x": 2, "y": 0, "m": false }, { "x": 2, "y": 0, "m": false }, { "x": 2, "y": 0, "m": false }, { "x": 2, "y": 0, "m": false }, { "x": 2, "y": 0, "m": false }, { "x": 2, "y": 0, "m": false }, { "x": 3, "y": 0, "m": false }, { "x": 3, "y": 0, "m": true }, { "x": 3, "y": 0, "m": false }, { "x": 3, "y": 0, "m": false }, { "x": 3, "y": 0, "m": false }, { "x": 3, "y": 0, "m": true }, { "x": 3, "y": 0, "m": false }, { "x": 4, "y": 0, "m": false }, { "x": 4, "y": 0, "m": false }, { "x": 4, "y": 0, "m": true }, { "x": 4, "y": 0, "m": true }, { "x": 4, "y": 0, "m": true }, { "x": 4, "y": 0, "m": false }, { "x": 4, "y": 0, "m": false }, { "x": 5, "y": 0, "m": false }, { "x": 5, "y": 0, "m": false }, { "x": 5, "y": 0, "m": false }, { "x": 5, "y": 0, "m": false }, { "x": 5, "y": 0, "m": false }, { "x": 5, "y": 0, "m": false }, { "x": 5, "y": 0, "m": false }, { "x": 6, "y": 0, "m": false }, { "x": 6, "y": 0, "m": false }, { "x": 6, "y": 0, "m": false }, { "x": 6, "y": 0, "m": false }, { "x": 6, "y": 0, "m": false }, { "x": 6, "y": 0, "m": false }, { "x": 6, "y": 0, "m": false } ];

}
