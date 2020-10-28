import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {StudentService} from '../../student.service';
import {loadStudent, loadStudents, setStudent, setStudents} from '../actions/student.action';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class LoadStudentsEffect {
  loadStudentsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadStudents),
      mergeMap(() => this.studentService.getStudents().pipe(
        map(students => setStudents({students})),
        catchError(() => EMPTY)
      ))
    );
  });
  loadStudentEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadStudent),
      switchMap((action) =>
        this.studentService.getStudent(action.id).pipe(
          map(student => setStudent({student})),
          catchError(() => EMPTY)
        ))
    );
  });

  constructor(private actions$: Actions,
              private studentService: StudentService) {
  }
}
