import clsx from 'clsx';
import type { ReactNode } from 'react';

interface ISharedCard {
  children: ReactNode;
  title?: string;
  outerClassName?: string;
  innerClassName?: string;
  extra?: ReactNode;
}

const SharedCard = ({ title, children, outerClassName, innerClassName, extra }: ISharedCard) => {
  const outer = clsx('p-4 border border-stone-200 rounded-lg', outerClassName);
  return (
    <div className={outer}>
      {(title || extra) && (
        <div className=''>
          {title && <p className='header-sm text-stone-700'>{title}</p>}
          {extra}
        </div>
      )}
      <div className={innerClassName}>{children}</div>
    </div>
  );
};

export default SharedCard;
