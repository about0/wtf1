import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    getAuthors(): string[] {
        return [
            'Martin L. King',
            'Michele Obama',
            'George Orwell',
            'The Pope'
        ];
    }

}
