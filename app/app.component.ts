import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [{ title: 'dulaj 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

  addSlide() {
    this.items.push({
      title: `Slide 4`,
    });
  }
}
