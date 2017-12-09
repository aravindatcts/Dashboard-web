import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'app';
  expandClaims: boolean=false;

  toggleClaims(): void {
    this.expandClaims = !this.expandClaims;
  }
}
