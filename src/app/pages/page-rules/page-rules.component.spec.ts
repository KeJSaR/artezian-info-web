import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRulesComponent } from './page-rules.component';

describe('PageRulesComponent', () => {
  let component: PageRulesComponent;
  let fixture: ComponentFixture<PageRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
