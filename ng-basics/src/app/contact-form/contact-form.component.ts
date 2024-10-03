import { Component, inject } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  formBilder: FormBuilder = inject(FormBuilder);
  contactForm = this.formBilder.group(
    {
      firstName:['', [Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(1)]],
      email:['',[Validators.required,Validators.email]],
      phoneNumber:[
            '',
          [  Validators.required,
              Validators.pattern('^[0-9]*$'),
              Validators.minLength(10)
          ],
        ],
    }
  );

  get f(){
    return this.contactForm.controls;
  }


}
