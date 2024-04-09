import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarObjPage } from './editar-obj.page';

describe('EditarObjPage', () => {
  let component: EditarObjPage;
  let fixture: ComponentFixture<EditarObjPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarObjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
