import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {

     GetCourses(): string[] {
       return [
            'Course1',
            'Course2',
            'Course3'
        ];
    }
    constructor() {
    }

}
