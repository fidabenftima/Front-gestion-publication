import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'publications', pathMatch: 'full' },
  { path: 'publications', component: PublicationListComponent},
  { path: 'publications/:id', component: PublicationDetailsComponent },
  { path: 'add', component: CreatePublicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
