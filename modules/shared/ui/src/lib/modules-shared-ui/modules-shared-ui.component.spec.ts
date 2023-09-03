import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesSharedUiComponent } from './modules-shared-ui.component';

describe('ModulesSharedUiComponent', () => {
  let component: ModulesSharedUiComponent;
  let fixture: ComponentFixture<ModulesSharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesSharedUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
