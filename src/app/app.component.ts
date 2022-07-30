import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The title of App Component';

  today = new Date();

  pColor = '';
  setTextColor(_color: string){
    console.log(_color);
    this.pColor = _color
  }

}
