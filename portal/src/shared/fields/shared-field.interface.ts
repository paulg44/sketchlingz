import type { Rule } from 'antd/es/form';
import type { ReactNode } from 'react';

export interface ISharedFieldBase {
  fieldKey: string;
  label?: string | ReactNode;
  required: boolean;
  control: ReactNode;
  hidden?: boolean;
  disabled?: boolean;
  loading?: boolean;
  tooltip?: string;
  customRules?: Rule[];
  dependencies?: string[];
  extra?: ReactNode;
  validateTrigger?: string | string[] | false;
  className?: string;
  helpText?: string | ReactNode;
  extraClassName?: string;
}

export type ISharedField = ISharedFieldBase;

export interface ISharedTextInputField extends ISharedFieldBase {
  placeholder?: string;
}
