import { Component, EventEmitter, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-step1-plano',
  standalone: true,
  imports: [InputTextModule, CheckboxModule, ButtonModule, FormsModule, CommonModule],
  templateUrl: './step1-plano.component.html',
  styleUrl: './step1-plano.component.css'
})
export class Step1PlanoComponent {
  @Output() objetivosSelecionados = new EventEmitter<any[]>();
  objetivos = Array.from({ length: 6 }, (_, i) => ({
    descricao: `Objetivo ${i + 1}`,
    selecionado: false
  }));


  goToNext() {
    const objetivosSelecionados = this.objetivos.filter(obj => obj.selecionado);
    this.objetivosSelecionados.emit(objetivosSelecionados);
  }
}
