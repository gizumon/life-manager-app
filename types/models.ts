export interface IConfig {
  type: string,
  name: string,
  icon: string,
  description: string,
  inputs: IInput[]
}

export interface IInput {
  id: string,
  name: string,
  type: string,
  placeholder: string,
  icon: string,
  model: IModel,
  validates: IValidate[],
  data?: IModel[]
}

export interface IValidate {
  type: string,
  args: any[]
}

export interface IModel {
  name: string,
  picture?: string,
  isSelected?: boolean
}