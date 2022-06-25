import React, { FC } from 'react';

import { Spinner } from './spinner';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  as?: 'button';
}

interface IAnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  as?: 'a';
}

type IAnchorButtonProps = IButtonProps | IAnchorProps;

type IButtonComponentProps = IAnchorButtonProps & {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
};

const commonButtonStyles = `
  p-4 text-sm flex items-center rounded
  uppercase gap-2 justify-center
  font-bold transition-colors cursor-pointer
  disabled:opacity-50
`;

const variantStyles = {
  primary: 'bg-green-500 hover:bg-green-700',
  secondary:
    'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900',
};

const ButtonComponent: FC<IButtonComponentProps> = ({
  as = 'button',
  variant = 'primary',
  children,
  className,
  isLoading = false,
  ...props
}) => {
  const buttonContent = isLoading ? <Spinner /> : children;

  if (as === 'a') {
    return (
      <a
        className={`
          ${commonButtonStyles}
          ${variantStyles[variant]}
          ${className}
        `}
        {...(props as IAnchorProps)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={`
        ${commonButtonStyles}
        ${variantStyles[variant]}
        ${className}
      `}
      disabled={(props as IButtonProps).disabled || isLoading}
      {...(props as IButtonProps)}
    >
      {buttonContent}
    </button>
  );
};

export { ButtonComponent as Button };
