import { Injectable } from '@angular/core';

import {
  ServerOptionsBase,
  BooleanOption,
  SelectOption,
  SelectMultipleOption,
  TextboxOption,
} from './servers-options-base';

@Injectable()
export class FormOptionsService {
  get Options() {
    const options: ServerOptionsBase<string>[] = [
      new TextboxOption({
        key: 'name',
        label: 'Server hostname',
        required: true,
        order: 1,
      }),
      new SelectOption({
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
      new BooleanOption({
        key: 'virtual',
        label: 'Virtual server',
        required: true,
        order: 3,
      }),
    ];
    return of(options.sort((a, b) => a.order - b.order));
  }
}
