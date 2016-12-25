import {Component} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['../app.component.css'],
    providers: [AuthorService]
})
export class AuthorsComponent {
    title: string = 'Authors';
    authors: string[];
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}
