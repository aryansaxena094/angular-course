import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  constructor() {}
  
  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: true
  })
  cardIndex: number;
  
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Card component - button clicked...")
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
      return 'beginner';
    } 
  }
  cardStyles(){
    return{
    };
  }
}