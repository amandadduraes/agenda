import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule,],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component {
  @Input() formGroup!: FormGroup;
  @Input() nextStep!: () => void;
  @Input() schools!: { label: string; value: any }[];
}
