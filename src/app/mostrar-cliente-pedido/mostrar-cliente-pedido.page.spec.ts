import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarCLientePedidoPage } from './mostrar-cliente-pedido.page';

describe('MostrarCLientePedidoPage', () => {
  let component: MostrarCLientePedidoPage;
  let fixture: ComponentFixture<MostrarCLientePedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarCLientePedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarCLientePedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
