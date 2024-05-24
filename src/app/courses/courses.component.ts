import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  // Properties
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  filterValue: string = "";
  constructor(private coursesService: CoursesService) {}
  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }
  applyFilter(): void {
    this.filteredCourses = this.courses.filter((course) =>
      course.code.toLowerCase().includes(this.filterValue) ||
      course.coursename.toLowerCase().includes(this.filterValue) ||
      course.progression.includes(this.filterValue)
    );
  }
  sortCourses(criteria: string): void {
    this.filteredCourses.sort((a, b) => {
      if (a[criteria] < b[criteria]) {
        return -1;
      }
      if (a[criteria] > b[criteria]) {
        return 1;
      }
      return 0;
    });
  }
}