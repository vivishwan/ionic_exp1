import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  ngOnInit() {}
  goToPoster() {
    this.router.navigate(['/poster']);
  }
  // openURL = function (url) {
  //   navigator.app.loadUrl(url, { openExternal: true });
  // };
}
