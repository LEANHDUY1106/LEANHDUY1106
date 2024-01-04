import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, ComponentOverviewByCliComponent],
})
export class AppComponent {
  title = 'hello-world';
}
