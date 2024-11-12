import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3PlanoComponent } from './step3-plano.component';

describe('Step3PlanoComponent', () => {
  let component: Step3PlanoComponent;
  let fixture: ComponentFixture<Step3PlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3PlanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3PlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
