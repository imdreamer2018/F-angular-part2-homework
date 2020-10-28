import {createAction, props} from '@ngrx/store';
import {Student} from '../../student';

export const loadStudents = createAction('[studentList component] load students');
export const loadStudent = createAction('[student detail component] load student', props<{ id: number}>());
export const setStudent = createAction('[student detail component] set student', props<{ student: Student}>());
export const setStudents = createAction('[student component] set students', props<{ students: Student[]}>());
