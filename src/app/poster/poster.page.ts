import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.page.html',
  styleUrls: ['./poster.page.scss'],
})
export class PosterPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goToHome() {
    this.router.navigate(['/home']);
  }
}
