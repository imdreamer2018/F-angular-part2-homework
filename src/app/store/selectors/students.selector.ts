import {AppState} from '../../app.states';

export const selectorStudents = (state: AppState) => state.students;

// export const selectorStudent = (state: AppState, props: {id: number}) => {
//   return state.students.find(student => student.id === props.id) || { id: 0, name: 'not found', age: 0};
// };

export const selectorStudent = (state: AppState) => state.student;
