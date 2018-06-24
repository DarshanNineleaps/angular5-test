import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent
      ],
      imports: [
        // BrowseModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(FormComponent);
      component = fixture.componentInstance; // FormComponent test instance
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have as name  form details', async(() => {
    expect(component.name).toEqual('form details');
  }));
  it('should set submitted to be true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));
  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));
});
