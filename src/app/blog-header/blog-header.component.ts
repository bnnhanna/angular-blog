import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent {
  title = 'The blog';
  subtitle = 'Writings from our team';
  description = 'The latest industry news, interviews, technologies, and resources.';
}
