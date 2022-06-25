import React, { FC } from 'react';

import { LogoIgnite } from './logo-ignite';

type IHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const Header: FC<IHeaderProps> = ({ ...props }) => {
  return (
    <header
      className="
        w-full py-5 flex items-center justify-between lg:justify-center px-6
      bg-gray-700 border-b border-gray-600 relative gap-6
      "
      {...props}
    >
      <LogoIgnite className="w-[167px] md:w-[237px]" />
    </header>
  );
};
