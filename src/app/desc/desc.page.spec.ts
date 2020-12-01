import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescPage } from './desc.page';

describe('DescPage', () => {
  let component: DescPage;
  let fixture: ComponentFixture<DescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
