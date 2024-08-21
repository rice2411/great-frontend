import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';
  SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form';
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      message: [''],
    });
  }
  async onSubmit() {
    const form = this.contactForm.value;

    try {
      const response = await fetch(this.SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const text = await response.text();
      alert(text);
    } catch (_) {
      alert('Error submitting form!');
    }
  }
}
