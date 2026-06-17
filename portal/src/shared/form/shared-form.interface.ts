import type { FormInstance } from 'antd';
import type { ISharedButton } from '../button/button.interface';
import type { ISharedField } from '../fields/shared-field.interface';
import type { RequiredMark } from 'antd/es/form/Form';

interface IButtonsOverrideButton extends ISharedButton {
  key: string;
}

export interface ISharedForm<T> {
  formInstance?: FormInstance<T>;
  onFinish: (values: T) => void;
  name: string;
  buttonsOverride?: IButtonsOverrideButton[];
  buttonLabelKey?: string;
  cancelButton?: ISharedButton;
  submitting?: boolean;
  fields: ISharedField[];
  className?: string;
  existingValue?: Partial<T>;
  initializing?: boolean;
  onChange?: (changedValues: Partial<T>, allValues: T) => void;
  formError?: string;
  disabled?: boolean;
  layout: 'horizontal' | 'vertical' | 'inline';
  requiredMark?: RequiredMark;
  scrollToFirstError?: boolean;
}
