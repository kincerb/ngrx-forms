import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ServerOptionsBase } from './servers-options-base';

@Component({
  selector: 'app-servers-form-option',
  templateUrl: './servers-dynamic-form-options.component.html',
})
export class ServersDynamicFormOptionsComponent implements OnInit {
  @Input() option: ServerOptionsBase<string>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.option.key].valid;
  }

  constructor() {}

  ngOnInit(): void {}
}
