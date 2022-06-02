import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  publications?: Publication[];
  currentPublication?: Publication;
  currentIndex = -1;
  title = '';
  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.retrievePublications();
  }

  retrievePublications(): void {
    this.publicationService.getAll()
      .subscribe(
        data => {
          this.publications = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePublications();
    this.currentPublication = undefined;
    this.currentIndex = -1;
  }

  setActivePublication(publication: Publication, index: number): void {
    this.currentPublication = publication;
    this.currentIndex = index;
  }

  removeAllPublications(): void {
    this.publicationService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentPublication = undefined;
    this.currentIndex = -1;

    this.publicationService.findByTitle(this.title)
      .subscribe(
        data => {
          this.publications = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
