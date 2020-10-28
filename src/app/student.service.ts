import { Injectable } from '@angular/core';
import { Student } from './student';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  // get url: /assets/students.mock.json
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('assets/students.mock.json');
  }

  // get url: /assets/student{id}.mock.json
  getStudent(id: number): Observable<Student> {
    if (id > 0) {
      return this.http.get<Student>(`assets/student${id}.mock.json`);
    } else {
      throw new Error('Not Found');
    }
  }
}
