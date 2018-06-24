import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component';
// import {FormService } from '../../Services/form-service/form.service';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
