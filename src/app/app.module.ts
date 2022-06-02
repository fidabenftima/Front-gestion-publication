import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePublicationComponent,
    PublicationDetailsComponent,
    PublicationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
