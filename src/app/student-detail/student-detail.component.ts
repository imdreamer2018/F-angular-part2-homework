import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.sass'],
})
export class StudentDetailComponent implements OnInit {
  student?: Student;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(paramMap => Number(paramMap.get('id'))),
      map(id => this.studentService.getStudent(id)),
    ).subscribe(
      data => data.subscribe(
        student => this.student = student,
      ),
      error => this.errorMessage = error,
    );
  }
}
