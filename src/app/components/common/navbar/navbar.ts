import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
}
