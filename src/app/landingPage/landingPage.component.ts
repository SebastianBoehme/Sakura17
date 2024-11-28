import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <section>
        <div><app-navbar></app-navbar></div>
      <h1 class="font-raleway">SAKURA RAMEN</h1>
      <span class="font-raleway">THE BEST RAMEN IN TOWN</span>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
