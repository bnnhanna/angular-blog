import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() imageUrl: string = 'https://via.placeholder.com/300x180';
}
