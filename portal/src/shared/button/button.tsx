import { Button } from 'antd';
import type { ISharedButton } from './button.interface';

const SharedButton = ({
  type,
  appearance,
  labelKey,
  onClick,
  loading = false,
  disabled = false,
  danger = false,
  ghost = false,
  size,
  height,
  fullWidth = false,
  icon,
  shape = 'default',
  additionalStyle,
  href,
  iconPosition = 'start',
  className,
}: ISharedButton) => {
  return (
    <Button
      iconPosition={iconPosition}
      shape={shape}
      icon={icon}
      className={className}
      style={{
        color: additionalStyle?.color,
        height: height,
        padding: appearance === 'link' ? 0 : '4px 15px',
        ...additionalStyle,
      }}
      type={appearance}
      danger={danger}
      ghost={ghost}
      size={size}
      htmlType={type}
      disabled={disabled}
      loading={loading}
      href={href}
      onClick={(event: React.MouseEvent) => {
        if (onClick) {
          onClick(event);
        }
      }}
      block={fullWidth}
    >
      {labelKey}
    </Button>
  );
};

export default SharedButton;
