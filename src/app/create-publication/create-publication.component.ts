import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  publication: Publication = {
    title: '',
    description: '',
    published: ''
  };
  submitted = false;


  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
  }
  savePublication(): void {
    const data = {
      title: this.publication.title,
      description: this.publication.description
    };

    this.publicationService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPublication(): void {
    this.submitted = false;
    this.publication = {
      title: '',
      description: '',
      published: ''
    };
  }

}
