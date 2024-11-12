import { Component } from '@angular/core';
import { Person } from '../interface/types';
import { MockPersonService } from '../mock/mock-person.service';
import { MenuComponent } from '../menu/menu.component';
import { TableModule } from 'primeng/table'; // Importa o módulo da tabela do PrimeNG
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { PessoaFormComponent } from '../pessoa-form/pessoa-form.component';
@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [MenuComponent, CommonModule, TableModule, ButtonModule, StepsModule, InputTextModule, DialogModule, PessoaFormComponent],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent {
  people: Person[] = [];
  displayAddPersonModal = false;
  showForm = false;
  editPerson: any = null;
  constructor(private mockPersonService: MockPersonService) {}

  ngOnInit() {
    this.people = this.mockPersonService.getPeople();
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.editPerson = null;
  }

  onEditPerson(person: Person) {
    this.editPerson = person;
    this.showForm = true;
  }


  onDeletePerson(person: Person) {
    const index = this.people.indexOf(person);
    if (index > -1) {
      this.people.splice(index, 1);
    }
  }

  adicionarPessoa(pessoa: any) {
    this.people.push(pessoa);
    this.showForm = false;
  }
  atualizarPessoa(pessoaAtualizada: any) {
    const index = this.people.findIndex(p => p.id === pessoaAtualizada.id);
    if (index > -1) {
      this.people[index] = pessoaAtualizada;
    }
    this.showForm = false;
  }

}
