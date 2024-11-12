import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1PlanoComponent } from './step1-plano.component';

describe('Step1PlanoComponent', () => {
  let component: Step1PlanoComponent;
  let fixture: ComponentFixture<Step1PlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1PlanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1PlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
