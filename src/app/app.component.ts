import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private location: Location) {
  }

  public canNavigateBack(): boolean {
    return this.router.url !== '/';
  }

  public goBack(): void {
    this.location.back();
  }
}
