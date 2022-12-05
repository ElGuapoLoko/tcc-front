import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowHistoricoComponent } from './workflow-historico.component';

describe('WorkflowHistoricoComponent', () => {
  let component: WorkflowHistoricoComponent;
  let fixture: ComponentFixture<WorkflowHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
