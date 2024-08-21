import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { Mortgage } from '../models/mortgage.model';
import { FormComponent } from '../components/form/form.component';
import { CommonModule } from '@angular/common';
import { FormState } from '../models/formState.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    FormComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  mortgage!: Mortgage;

  formSubmit(formData: FormGroup<any>): void {
    const mortgageData = formData as unknown as FormState;
    const loanAmount = mortgageData.loanAmount;
    const monthlyInterestRate = mortgageData.interestRate / 100 / 12;
    const loanTermInMonths = mortgageData.loanTerm * 12;
    const monthlyPaymentAmount =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTermInMonths));
    const totalPayment = monthlyPaymentAmount * loanTermInMonths;
    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    this.mortgage = {
      monthlyPayment: currencyFormatter.format(monthlyPaymentAmount),
      totalPayment: currencyFormatter.format(totalPayment),
      totalInterest: currencyFormatter.format(totalPayment - loanAmount),
    };
    console.log(this.mortgage);
  }
}
