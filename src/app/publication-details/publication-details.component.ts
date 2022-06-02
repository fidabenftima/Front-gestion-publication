import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {
  currentPublication: Publication = {
    title: '',
    description: '',
    published: ''
  };
  message = '';

  submitted = false;
  constructor( private publicationService: PublicationService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.message = '';
      this.getPublication(this.route.snapshot.params['id']);
    }
  
    getPublication(id: string): void {
      this.publicationService.get(id)
        .subscribe(
          data => {
            this.currentPublication = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
    updatePublished(status: boolean): void {
      const data = {
        title: this.currentPublication.title,
        description: this.currentPublication.description,
        published: this.currentPublication.published
      };
  
      this.message = '';
  
      this.publicationService.update(this.currentPublication.id, data)
        .subscribe(
          response => {
            console.log(response);
            this.message = response.message ? response.message : 'This tutorial was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }
  
    updatePublication(): void {
      this.message = '';
  
      this.publicationService.update(this.currentPublication.id, this.currentPublication)
        .subscribe(
          response => {
            console.log(response);
            this.message = response.message ? response.message : 'This publication was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }
  
    deletePublication(): void {
      this.publicationService.delete(this.currentPublication.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/publications']);
          },
          error => {
            console.log(error);
          });
    }
  }
