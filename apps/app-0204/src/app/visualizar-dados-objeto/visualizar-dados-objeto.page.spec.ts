import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarDadosObjetoPage } from './visualizar-dados-objeto.page';

describe('VisualizarDadosObjetoPage', () => {
  let component: VisualizarDadosObjetoPage;
  let fixture: ComponentFixture<VisualizarDadosObjetoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDadosObjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
