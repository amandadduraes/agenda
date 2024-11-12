import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-step2-plano',
  standalone: true,
  imports: [InputTextModule, DropdownModule, TableModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './step2-plano.component.html',
  styleUrl: './step2-plano.component.css'
})
export class Step2PlanoComponent implements OnInit{
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  @Input() objetivosSelecionados: any[] = [];
  etapas = [
    { label: 'Etapa A', value: 'A' },
    { label: 'Etapa B', value: 'B' },
    { label: 'Etapa C', value: 'C' }
  ];

  prioridades = [
    { label: 'Alta', value: 'Alta' },
    { label: 'Média', value: 'Média' },
    { label: 'Baixa', value: 'Baixa' }
  ];

  categorias = [
    { label: 'Categoria 1', value: 'Categoria 1' },
    { label: 'Categoria 2', value: 'Categoria 2' },
    { label: 'Categoria 3', value: 'Categoria 3' }
  ];

  novoProblema = {
    descricao: '',
    resultado: '',
    etapa: null,
    possuiCausa: null,
    prioridade: null,
    categoria: null,
  };

  causas = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false }
  ];

  ngOnInit() {
    this.objetivosSelecionados.forEach(objetivo => {
      if (!objetivo.problemas) {
        objetivo.problemas = [];
      }
    });
  }

  adicionarProblema(objetivoIndex: number) {
    if (this.novoProblema.descricao) {
      this.objetivosSelecionados[objetivoIndex].problemas = this.objetivosSelecionados[objetivoIndex].problemas || [];
      this.objetivosSelecionados[objetivoIndex].problemas.push({ ...this.novoProblema });
      this.novoProblema = { descricao: '', resultado: '', etapa: null, possuiCausa: null, prioridade: null, categoria: null };
    }
  }

}
