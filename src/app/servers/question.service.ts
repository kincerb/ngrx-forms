import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import {
  QuestionBase,
  BooleanQuestion,
  SelectQuestion,
  SelectMultipleQuestion,
  TextboxQuestion,
} from './question-base';

@Injectable()
export class QuestionService {
  // tslint:disable-next-line: typedef
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'name',
        label: 'Server hostname',
        required: true,
        order: 1,
      }),
      new SelectQuestion({
        key: 'platform',
        label: 'Server platform',
        required: true,
        options: [
          { key: 'linux', value: 'Linux' },
          { key: 'windows', value: 'Windows' },
          { key: 'macos', value: 'MacOS - Really?' },
        ],
        order: 2,
      }),
      new BooleanQuestion({
        key: 'virtual',
        label: 'Virtual server',
        required: true,
        order: 3,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
