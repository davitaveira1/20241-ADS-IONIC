import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarProdutosPage } from './listar-produtos.page';

describe('ListarProdutosPage', () => {
  let component: ListarProdutosPage;
  let fixture: ComponentFixture<ListarProdutosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
