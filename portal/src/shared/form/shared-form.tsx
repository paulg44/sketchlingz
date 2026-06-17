import { Form } from 'antd';
import clsx from 'clsx';
import type { ISharedForm } from './shared-form.interface';
import SharedButton from '../button/button';
import { AlertTriangle } from 'lucide-react';
import { Fragment } from 'react/jsx-runtime';
import SkeletonElement from '../skeleton/skeleton-element';

const SharedForm = <T,>({
  formInstance,
  onFinish,
  name,
  buttonsOverride,
  buttonLabelKey = 'submit',
  cancelButton,
  submitting = false,
  fields,
  className = 'p-4',
  existingValue,
  initializing = false,
  onChange,
  formError,
  disabled,
  layout = 'vertical',
  requiredMark = 'optional',
  scrollToFirstError = true,
}: ISharedForm<T>) => {
  const [form] = Form.useForm();
  return initializing ? (
    <div className={clsx('flex flex-col space-y-4', className)}>
      {fields.map((field) => (
        <div key={field.fieldKey}>
          <SkeletonElement className='mb-2' width='80px' height='17px' />
          <SkeletonElement width='100%' height='36px' />
        </div>
      ))}
    </div>
  ) : (
    <Form
      scrollToFirstError={scrollToFirstError}
      onFinish={onFinish}
      name={name}
      form={formInstance ?? form}
      onValuesChange={onChange}
      layout={layout}
      variant='outlined'
      requiredMark={requiredMark}
      className={className}
      disabled={submitting || disabled}
      initialValues={existingValue}
    >
      {fields
        .filter((field) => !field.hidden)
        .map((field) => (
          <Fragment key={field.fieldKey}>
            <Form.Item
              className={field.className}
              name={field.fieldKey}
              label={field.label}
              tooltip={field.tooltip}
              help={field.helpText}
              dependencies={field.dependencies}
              validateTrigger={field.validateTrigger}
              rules={[
                ...(field.required
                  ? [{ required: true, message: `${field.label ?? field.fieldKey} is required` }]
                  : []),
                ...(field.customRules ?? []),
              ]}
            >
              {field.control}
            </Form.Item>
            {field.extra && <Form.Item className={field.extraClassName}>{field.extra}</Form.Item>}
          </Fragment>
        ))}
      {formError && (
        <Form.Item>
          <div className='body-sm text-red-600 flex items-center'>
            <AlertTriangle className='mr-3' />
            <p>{formError}</p>
          </div>
        </Form.Item>
      )}
      {(!buttonsOverride || buttonsOverride.length > 0) && (
        <Form.Item className='m-0 pt-3'>
          <div className='flex space-x-2 justify-end'>
            {!buttonsOverride ? (
              <>
                {cancelButton && <SharedButton type='button' {...cancelButton} disabled={submitting} />}
                <SharedButton labelKey={buttonLabelKey} type='submit' appearance='primary' loading={submitting} />
              </>
            ) : (
              buttonsOverride.map(({ key, ...buttonProps }) => (
                <SharedButton key={buttonProps.labelKey ?? key} {...buttonProps} />
              ))
            )}
          </div>
        </Form.Item>
      )}
    </Form>
  );
};

export default SharedForm;
