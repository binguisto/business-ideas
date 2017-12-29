import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { ContactComponent } from './contact/contact.component';
import { IdeaDetailComponent } from './ideas-list/idea-detail/idea-detail.component';

const routes : Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: IdeasListComponent },
  {path: 'detail', component: IdeaDetailComponent },
  {path: 'contact', component: ContactComponent },
  {path: '**', component: IdeasListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    IdeasListComponent,
    ContactComponent,
    IdeaDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ], 
  providers: [],
  bootstrap: [AppComponent] 
}) 
export class AppModule { }
