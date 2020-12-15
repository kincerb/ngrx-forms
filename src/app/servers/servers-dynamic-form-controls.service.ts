import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServerOptionsBase } from './servers-options-base';

@Injectable()
export class ServerOptionsService {
  constructor() {}

  // tslint:disable-next-line: typedef
  toFormGroup(options: ServerOptionsBase<string>[]) {
    const group: any = {};

    options.forEach((option) => {
      group[option.key] = option.required
        ? new FormControl(option.value || '', Validators.required)
        : new FormControl(option.value || '');
    });
    return new FormGroup(group);
  }
}
