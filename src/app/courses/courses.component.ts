import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
//properties
courses: Course[] = [];
constructor(private coursesService: CoursesService) {}

ngOnInit (){
  this.coursesService.getCourses().subscribe((courses)=> {
    this.courses = courses;
  });
}
}
