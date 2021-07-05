import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProductoPage } from './edit-producto.page';

describe('EditProductoPage', () => {
  let component: EditProductoPage;
  let fixture: ComponentFixture<EditProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
