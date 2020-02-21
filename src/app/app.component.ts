import { Component } from '@angular/core';
import {FetchService} from './fetch.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  arrQuestions: [];

  constructor(private myService: FetchService) {}

  ngOnInit() {
    this.myService.getQuestions()
    .subscribe(data => this.arrQuestions = data as []);
  }

}
