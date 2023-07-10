import React from 'react';
import cn from 'classnames';

type Typography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'article'
  | 'span';
type Props = {
  className?: string;
  type: Typography;
  children: React.ReactNode;
};

const CoolText = ({ className, type = 'p', children }: Props) => {
  const themedStyles =
    'bg-gray-50  dark:bg-gray-900 text-gray-900 dark:text-gray-100';

  switch (type as Typography) {
    case 'h1':
      return <h1 className={cn(themedStyles, className)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(themedStyles, className)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(themedStyles, className)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn(themedStyles, className)}>{children}</h4>;
    case 'h5':
      return <h5 className={cn(themedStyles, className)}>{children}</h5>;
    case 'h6':
      return <h6 className={cn(themedStyles, className)}>{children}</h6>;
    case 'p':
      return <p className={cn(themedStyles, className)}>{children}</p>;
    case 'article':
      return (
        <article className={cn(themedStyles, className)}>{children}</article>
      );
    case 'span':
      return <span className={cn(themedStyles, className)}>{children}</span>;

    default:
      return <h1 className={cn(themedStyles, className)}>{children}</h1>;
  }
};

export default CoolText;
