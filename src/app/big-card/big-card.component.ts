import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() author: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tags: string[] = [];
  @Input() imageUrl: string = 'https://via.placeholder.com/800x400';
}
