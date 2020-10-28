import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {studentReducer, studentsReducer} from './store/reducers/students.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ students: studentsReducer, student: studentReducer})],
  exports: [StoreModule]
})
export class AppStoreModule{ }
