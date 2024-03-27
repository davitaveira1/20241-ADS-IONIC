import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarDadosPage } from './visualizar-dados.page';

describe('VisualizarDadosPage', () => {
  let component: VisualizarDadosPage;
  let fixture: ComponentFixture<VisualizarDadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisualizarDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
