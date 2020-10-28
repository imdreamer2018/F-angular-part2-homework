import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Student } from '../student';
import {Store} from '@ngrx/store';
import {selectorStudent} from '../store/selectors/students.selector';
import {loadStudent} from '../store/actions/student.action';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.sass'],
})
export class StudentDetailComponent implements OnInit {
  student?: Student;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectorStudent).subscribe(student => this.student = student);
    this.route.paramMap.pipe(
      map(paramMap => Number(paramMap.get('id'))),
      map(id => id)
      ).subscribe(id => {
      this.store.dispatch(loadStudent({id}));
    });
    // this.route.paramMap.pipe(
    //   map(paramMap => Number(paramMap.get('id'))),
    //   map(id => {
    //     console.log(id);
    //     return this.store.select(selectorStudent, {id});
    //   }),
    // ).subscribe(
    //   data => data.subscribe(
    //     student => this.student = student,
    //   ),
    //   error => this.errorMessage = error,
    // );
  }
}
