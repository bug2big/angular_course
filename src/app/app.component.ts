import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'recipes';
  title = 'angular_udemy';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
