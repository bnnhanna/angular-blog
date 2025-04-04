import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'Resources', link: '/resources' },
    { name: 'Pricing', link: '/pricing' }
  ];

  authItems = [
    { name: 'Log in', link: '/login' },
    { name: 'Sign up', link: '/signup' }
  ];
}
