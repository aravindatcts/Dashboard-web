import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  expandClaims: boolean=false;

  toggleClaims(): void {
    this.expandClaims = !this.expandClaims;
  }
}
