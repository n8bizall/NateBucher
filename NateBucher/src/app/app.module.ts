import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { WebimComponent } from '../app/webim/webim.component';
import { CemComponent } from '../app/cem/cem.component';
import { CrmComponent } from '../app/crm/crm.component';
import { GdivideoComponent } from '../app/gdivideo/gdivideo.component';
import { GdiwebsiteComponent } from '../app/gdiwebsite/gdiwebsite.component';


import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ResumeComponent,
    MenuComponent,
    MenuItemComponent,
    WebimComponent,
    CemComponent,
    CrmComponent,
    GdivideoComponent,
    GdiwebsiteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
