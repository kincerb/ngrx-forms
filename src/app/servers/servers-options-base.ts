export class ServerOptionsBase<T> {
  value: T;
  key: string;
  label: string;
  hint: string;
  tooltip: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  disabled: boolean;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      hint?: string;
      tooltip?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      disabled?: boolean;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.hint = options.hint;
    this.tooltip = options.tooltip;
    this.required = options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.disabled = options.disabled;
    this.options = options.options || [];
  }
}

export class BooleanOption extends ServerOptionsBase<string> {
  controlType = 'boolean';
}

export class SelectOption extends ServerOptionsBase<string> {
  controlType = 'select';
}

export class SelectMultipleOption extends ServerOptionsBase<string> {
  controlType = 'select-multiple';
}

export class TextboxOption extends ServerOptionsBase<string> {
  controlType = 'textbox';
}
