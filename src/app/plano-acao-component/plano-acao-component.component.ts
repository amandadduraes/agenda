import { Component } from '@angular/core';
import { Step1PlanoComponent } from '../step1-plano/step1-plano.component';
import { Step2PlanoComponent } from '../step2-plano/step2-plano.component';
import { Step3PlanoComponent } from '../step3-plano/step3-plano.component';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-plano-acao-component',
  standalone: true,
  imports: [StepsModule, ButtonModule, Step1PlanoComponent, Step2PlanoComponent, Step3PlanoComponent, CommonModule, MenuComponent],
  templateUrl: './plano-acao-component.component.html',
  styleUrl: './plano-acao-component.component.css'
})
export class PlanoAcaoComponent {
  activeIndex: number = 0;
  objetivosSelecionados: any[] = [];


  handleObjetivosSelecionados(objetivos: any[]) {
    this.objetivosSelecionados = objetivos;
    this.activeIndex = 1;
  }

  items = [
    { label: 'Etapa 1' },
    { label: 'Etapa 2' },
    { label: 'Etapa 3' }
  ];

  nextStep() {
    if (this.activeIndex < 2) {
      this.activeIndex++;
    }
  }

  prevStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  onFinish() {
    console.log('Plano de ação finalizado!');
  }
}
