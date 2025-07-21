import { Button } from 'antd';
import type { ISharedButton } from './button.interface';

const SharedButton = ({ type, appearance }: ISharedButton) => {
  return (
    <Button type={appearance} htmlType={type}>
      Test Button
    </Button>
  );
};

export default SharedButton;
