import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import {
  QuestionBase,
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
        description:
          'Enter the server with domain name, ex. elvmt0048.nwie.net',
        required: true,
        type: 'text',
        order: 1,
      }),
      new SelectQuestion({
        key: 'platform',
        label: 'Server platform',
        description: 'Choose the OS platform from available choices',
        required: true,
        type: 'text',
        options: [
          { key: 'linux', value: 'Linux' },
          { key: 'windows', value: 'Windows' },
          { key: 'macos', value: 'MacOS - Really?' },
        ],
        order: 2,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
