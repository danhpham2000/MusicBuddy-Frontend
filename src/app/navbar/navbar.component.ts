import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  logoImage: string;
  constructor() {
    this.logoImage = 'public/rb_6376.png';
  }
  ngOnInit(): void {}
}
