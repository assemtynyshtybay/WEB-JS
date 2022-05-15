import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersBlockComponent } from './characters-block.component';

describe('CharactersBlockComponent', () => {
  let component: CharactersBlockComponent;
  let fixture: ComponentFixture<CharactersBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
