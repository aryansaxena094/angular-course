import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[0].description;

  price = 912.129841294;

  startDate = new Date(2000, 0, 1);



  onCourseSelected(course:Course){
    console.log("App Component - click event bubbled to container component -", course);
  }

}
