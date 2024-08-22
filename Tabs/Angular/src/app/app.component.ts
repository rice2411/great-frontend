import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from '../components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tabs = [
    {
      value: 'html',
      label: 'HTML',
      panel:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      value: 'css',
      label: 'CSS',
      panel:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      value: 'javascript',
      label: 'JavaScript',
      panel:
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
  ];
}
