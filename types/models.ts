export interface IValidate {
  type: string;
  args: any[];
}

export interface IModel {
  id?: string;
  name: string;
  picture?: string;
  isSelected?: boolean;
}

export interface IInput {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  icon: string;
  model: IModel;
  validates: IValidate[];
  dataList?: IModel[];
}

export interface IConfig {
  type: string;
  name: string;
  icon: string;
  description: string;
  inputs: IInput[];
}
