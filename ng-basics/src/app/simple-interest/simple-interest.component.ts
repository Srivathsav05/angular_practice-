import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-interest',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './simple-interest.component.html',
  styleUrl: './simple-interest.component.css',
})
export class SimpleInterestComponent {

  simpleInterestForm = new FormGroup({
    principal: new FormControl(100, [Validators.required, Validators.min(100)]),
    rate: new FormControl(1, [Validators.required, Validators.min(1)]),
    time: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  get f() {
    return this.simpleInterestForm.controls;
  }

  submit() {
    console.log('Form Submitted');
    const principal = this.simpleInterestForm.get('principal')?.value ?? 1;
    const rate = this.simpleInterestForm.get('rate')?.value ?? 1;
    const time = this.simpleInterestForm.get('time')?.value ?? 1;

    const simpleInterest = (principal * rate * time) / 100;
    console.log('Simple Interest: ', simpleInterest);

    console.log('Form Value: ', this.simpleInterestForm.value);
  }
}
