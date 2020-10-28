import {Student} from '../../student';
import {createReducer, on} from '@ngrx/store';
import {setStudent, setStudents} from '../actions/student.action';

const initStudentsState: Student[] = [];
const initStudentState: Student = {id: 0, name: 'not found', age: 0};

export const studentsReducer = createReducer(
  initStudentsState,
  on(setStudents, ((state, props) => props.students)),
);

export const studentReducer = createReducer(
  initStudentState,
  on(setStudent, ((state, props) => props.student)),
);

