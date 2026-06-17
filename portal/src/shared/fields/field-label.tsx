import * as Label from '@radix-ui/react-label';

interface ISharedFieldLabel {
  label: string;
  fieldKey: string;
}

const SharedFieldLabel = ({ label, fieldKey }: ISharedFieldLabel) => {
  return (
    <Label.Root className='label-sm' htmlFor={fieldKey}>
      {label}
    </Label.Root>
  );
};

export default SharedFieldLabel;
