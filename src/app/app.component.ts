import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavigationComponent, RouterModule]  // Добавяме RouterModule тук
})
export class AppComponent {
  title = 'project-vestidor';
}