import { CaretRight } from 'phosphor-react';
import { FC, ReactNode } from 'react';

interface ICardButtonProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  href?: string;
}

export const CardButton: FC<ICardButtonProps> = ({
  title,
  description,
  icon,
  href,
}) => {
  return (
    <a
      href={href}
      className="
    bg-gray-700 rounded overflow-hidden flex items-stretch
      gap-6 hover:bg-gray-600 transition-colors
      "
    >
      <div className="bg-green-700 h-full p-6 flex items-center">{icon}</div>
      <div className="py-6 leading-relaxed flex-1">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{description}</p>
      </div>
      <div className="h-full p-6 flex items-center text-blue-500">
        <CaretRight size={24} />
      </div>
    </a>
  );
};
