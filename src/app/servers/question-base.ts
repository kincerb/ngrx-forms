export class QuestionBase<T> {
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

export class BooleanQuestion extends QuestionBase<string> {
  controlType = 'boolean';
}

export class SelectQuestion extends QuestionBase<string> {
  controlType = 'select';
}

export class SelectMultipleQuestion extends QuestionBase<string> {
  controlType = 'select-multiple';
}

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
}