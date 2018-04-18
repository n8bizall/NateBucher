import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { HomeComponent } from '../app/home/home.component';
import { ResumeComponent } from '../app/resume/resume.component';
import { AppComponent } from '../app/app.component';
import { WebimComponent } from '../app/webim/webim.component';
import { CemComponent } from '../app/cem/cem.component';
import { CrmComponent } from '../app/crm/crm.component';
import { GdivideoComponent } from '../app/gdivideo/gdivideo.component';
import { GdiwebsiteComponent } from '../app/gdiwebsite/gdiwebsite.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'webim', component: WebimComponent},
  {path: 'cem', component: CemComponent},
  {path: 'crm', component: CrmComponent},
  {path: 'gdivideo', component: GdivideoComponent}, 
  {path: 'gdiwebsite', component: GdiwebsiteComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  declarations: []
})
export class AppRoutingModule { }
