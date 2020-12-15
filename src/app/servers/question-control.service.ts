import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() {}

  // tslint:disable-next-line: typedef
  toFormGroup(options: QuestionBase<string>[]) {
    const group: any = {};

    options.forEach((option) => {
      group[option.key] = option.required
        ? new FormControl(option.value || '', Validators.required)
        : new FormControl(option.value || '');
    });
    return new FormGroup(group);
  }
}
