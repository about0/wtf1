import {Component} from '@angular/core';
import {CourseService} from './course.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['../app.component.css'],
    providers: [CourseService]
})
export class CoursesComponent {
    title = 'Courses';
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.GetCourses();
    }
}
