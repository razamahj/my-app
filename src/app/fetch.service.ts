import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(
    private http: HttpClient
    ) {}

    getQuestions() {
        return this.http.get('../../assets/question.json');

    }

  }

