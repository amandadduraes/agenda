import { CommonModule } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {
  @Input() formGroup!: FormGroup;
  @Input() prevStep!: () => void;
  @Input() nextStep!: () => void;
  @Input() addPhoneField!: () => void;
  @Input() removePhoneField!: (index: number) => void;


  get phones(): FormArray {
    return this.formGroup.get('phones') as FormArray;
  }
}
