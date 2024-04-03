import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarDadosPage } from './listar-dados.page';

describe('ListarDadosPage', () => {
  let component: ListarDadosPage;
  let fixture: ComponentFixture<ListarDadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
