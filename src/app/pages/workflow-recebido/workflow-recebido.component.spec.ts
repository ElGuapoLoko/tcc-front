import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowRecebidoComponent } from './workflow-recebido.component';

describe('WorkflowRecebidoComponent', () => {
  let component: WorkflowRecebidoComponent;
  let fixture: ComponentFixture<WorkflowRecebidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowRecebidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowRecebidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
