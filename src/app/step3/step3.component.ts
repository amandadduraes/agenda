import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  @Input() formGroup!: FormGroup;
  @Input() prevStep!: () => void;
  @Input() onSubmit!: () => void;
  @Input() countries!: { label: string; value: string }[];
}
