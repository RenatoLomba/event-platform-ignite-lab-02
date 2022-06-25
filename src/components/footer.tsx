import React, { FC } from 'react';

import { LogoRocketseat } from './logo-rocketseat';

type IFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const defaultStyle = `
  w-full flex gap-7 items-center border-t flex-col lg:flex-row
  border-gray-500 pt-6
`;

export const Footer: FC<IFooterProps> = ({ className, ...props }) => {
  return (
    <footer className={`${defaultStyle} ${className}`} {...props}>
      <LogoRocketseat />

      <span className="flex-1 text-gray-300 block">
        Rocketseat - Todos os direitos reservados
      </span>

      <span className="text-gray-300 block">Políticas de Privacidade</span>
    </footer>
  );
};
