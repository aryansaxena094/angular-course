import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit{
  constructor() {}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log("image: ", this.image)
  }
  
  @Input({
  })
  course: Course;
 
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild('courseImage')
  image;

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