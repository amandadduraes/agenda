import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PlanoComponent } from './step2-plano.component';

describe('Step2PlanoComponent', () => {
  let component: Step2PlanoComponent;
  let fixture: ComponentFixture<Step2PlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2PlanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2PlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
