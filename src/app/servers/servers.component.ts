import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [QuestionService],
})
export class ServersComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
