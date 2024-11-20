import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  standalone: true,
  imports: [CommonModule] // Импортирайте CommonModule за ngFor и други директиви
})
export class CatalogComponent {
  items = [
    { name: 'Item 1', condition: 'Good', price: 5.00, image: 'path/to/image1.jpg' },
    { name: 'Item 2', condition: 'Like New', price: 10.00, image: 'path/to/image2.jpg' },
    { name: 'Item 3', condition: 'Used', price: 2.00, image: 'path/to/image3.jpg' }
  ];
}
