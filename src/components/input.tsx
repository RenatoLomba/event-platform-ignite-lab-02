import React, { FC } from 'react';

type IInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: FC<IInputProps> = ({ ...props }) => {
  return <input className="bg-gray-900 rounded px-5 h-14" {...props} />;
};
