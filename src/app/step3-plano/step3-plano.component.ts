import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeTableModule } from 'primeng/treetable';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step3-plano',
  standalone: true,
  imports: [TableModule, MenuModule, ButtonModule, CommonModule, FormsModule, TreeTableModule],
  templateUrl: './step3-plano.component.html',
  styleUrl: './step3-plano.component.css'
})
export class Step3PlanoComponent {

  @Input() objetivosSelecionados: any[] = [];
  @Output() previous = new EventEmitter<void>();
  @Output() finish = new EventEmitter<void>();
  objetivosPaginados: any[] = [];
  rowsPerPage = 5;
  itemsMenu: MenuItem[];

  constructor() {
    this.itemsMenu = [
      { label: 'Adicionar ação', icon: 'pi pi-plus', command: () => this.adicionarAcaoSelecionada() }
    ];
  }

  carregarObjetivos(event: any) {
    const start = event.first;
    const end = start + this.rowsPerPage;
    this.objetivosPaginados = this.objetivosSelecionados.slice(start, end);
  }

  abrirMenu(event: Event, menu: any) {
    menu.toggle(event);
  }

  goToPrevious() {
    this.previous.emit();
  }

  finalizarPlano() {
    console.log('Plano de ação finalizado com os objetivos:', this.objetivosSelecionados);
    this.finish.emit();
  }

  adicionarAcao(rowIndex: number) {
    console.log('Adicionar ação para o objetivo no índice:', rowIndex);
  }

  adicionarAcaoSelecionada() {
    console.log('Ação selecionada para adicionar.');
  }
}
