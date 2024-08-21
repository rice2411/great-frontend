import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormState } from '../../models/formState.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Output()
  onFormSubmit = new EventEmitter<FormGroup>();
  mortgageForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  onSubmit(form: FormGroup): void {
    this.onFormSubmit.emit(form);
  }
  createContactForm() {
    this.mortgageForm = this.formBuilder.group({
      loanAmount: 0,
      interestRate: 0,
      loanTerm: 0,
    });
  }
}
