import { Component, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenuComponent } from '../menu/menu.component';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [ReactiveFormsModule, StepsModule, InputTextModule, ButtonModule, CommonModule, DropdownModule, MenuComponent, Step1Component, Step2Component,Step3Component ],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {
  @Input() editPerson: any; // Recebe os dados da pessoa para edição
  @Output() personAdded = new EventEmitter<any>();
  @Output() personUpdated = new EventEmitter<any>();;
  activeIndex: number = 0;
  showForm: boolean = true;
  step1Form!: FormGroup; // Indica ao TypeScript que será inicializado antes do uso
  step2Form!: FormGroup;
  step3Form!: FormGroup;


  items = [
    { label: 'Dados Cadastrais' },
    { label: 'Dados de Contato' },
    { label: 'Dados de Endereço' }
  ];

  // Opções de escola para o dropdown
  schools = [
    { label: 'Escola 1', value: 'escola1' },
    { label: 'Escola 2', value: 'escola2' }
  ];



  constructor(private fb: FormBuilder) {
    this.initializeForms();
  }


  private initializeForms() {
    this.step1Form = this.fb.group({
      name: ['', Validators.required],
      socialName: [''],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      cnpj: ['', Validators.minLength(14)],
      school: ['']
    });

    this.step2Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phones: this.fb.array([this.createPhoneField()]) // Inicializa com um campo de telefone
    });

    this.step3Form = this.fb.group({
      address: ['', Validators.required],
      cep: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  private populateForm(person: any) {
    this.step1Form.patchValue({
      name: person.name,
      socialName: person.socialName,
      cpf: person.cpf,
      cnpj: person.cnpj,
      school: person.school
    });

    this.step2Form.patchValue({
      email: person.email
    });
    this.step2Form.setControl('phones', this.fb.array(person.phones.map((phone: any) => this.fb.group({ phone }))));

    this.step3Form.patchValue({
      address: person.address,
      cep: person.cep,
      city: person.city,
      state: person.state,
      country: person.country
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  nextStep() {
    if (this.activeIndex < 2) { // Supondo que temos 3 steps (índices 0, 1 e 2)
      this.activeIndex++;
    }

  }

  prevStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  onSubmit() {
    const formData = {
      ...this.step1Form.value,
      ...this.step2Form.value,
      ...this.step3Form.value
    };
    if (this.editPerson) {
      formData.id = this.editPerson.id;
      this.personUpdated.emit(formData);
    } else {
      this.personAdded.emit(formData);
    }
    this.resetForm();

  }

  get phones(): FormArray {
    return this.step2Form.get('phones') as FormArray;
  }

  createPhoneField(): FormGroup {
    return this.fb.group({
      phone: ['', Validators.required]
    });
  }


  addPhoneField() {
    this.phones.push(this.createPhoneField());
  }

  removePhoneField(index: number) {
    if (this.phones.length > 1) {
      this.phones.removeAt(index);
    }
  }
  resetForm() {
    this.step1Form.reset();
    this.step2Form.reset();
    this.step3Form.reset();
    this.showForm = false;
    this.activeIndex = 0;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['editPerson'] && this.editPerson) {
      this.populateForm(this.editPerson);
    }
  }


}
