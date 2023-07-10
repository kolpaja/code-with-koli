import React from 'react';
import cn from 'classnames';

type BoxType = 'div' | 'section' | 'span' | 'aside' | 'nav';

type Props = {
  id?: string;
  className?: string;
  type: BoxType;
  children: React.ReactNode;
};

const CoolBox = ({ type = 'div', className, children }: Props) => {
  const themedStyles =
    'bg-gray-50  dark:bg-gray-900 text-gray-900 dark:text-gray-100';

  switch (type) {
    case 'div':
      return <div className={cn(themedStyles, className)}>{children}</div>;
    case 'aside':
      return <aside className={cn(themedStyles, className)}>{children}</aside>;
    case 'section':
      return (
        <section className={cn(themedStyles, className)}>{children}</section>
      );
    case 'nav':
      return <nav className={cn(themedStyles, className)}>{children}</nav>;
    case 'span':
      return <span className={cn(themedStyles, className)}>{children}</span>;
    default:
      return <div className={cn(themedStyles, className)}>{children}</div>;
  }
};

export default CoolBox;
