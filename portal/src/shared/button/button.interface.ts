import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ReactNode } from 'react';

export interface ISharedButton {
  type?: 'button' | 'submit' | 'reset';
  appearance?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  labelKey?: string;
  onClick?: Function;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  danger?: boolean;
  ghost?: boolean;
  size?: SizeType;
  height?: number;
  fullWidth?: boolean;
  icon?: ReactNode;
  shape?: 'default' | 'circle' | 'round';
  additionalStyle?: React.CSSProperties;
  href?: string;
  iconPosition?: 'start' | 'end';
}
