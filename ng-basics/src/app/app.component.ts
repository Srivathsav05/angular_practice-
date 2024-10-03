import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleInterestComponent,ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  
}
