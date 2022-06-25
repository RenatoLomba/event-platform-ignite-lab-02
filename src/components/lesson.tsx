import classNames from 'classnames';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
  isActive?: boolean;
}

export const Lesson: FC<ILessonProps> = ({
  availableAt,
  slug,
  title,
  type,
  isActive = false,
}) => {
  const isLessonAvailable = isPast(availableAt);
  const availableAtFormatted = format(
    availableAt,
    `EEEE' • 'd' de 'MMMM' • 'k'h'mm`,
    {
      locale: ptBR,
    },
  );

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableAtFormatted}</span>

      <div
        className={classNames(
          `
          rounded border border-gray-500 p-4 mt-2
        group-hover:border-green-500 transition-colors
        `,
          {
            'bg-green-500': isActive,
          },
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'text-sm font-medium flex items-center gap-2',
                {
                  'text-white': isActive,
                  'text-blue-500': !isActive,
                },
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded px-2 py-[0.125rem] text-white border',
              {
                'border-white': isActive,
                'border-green-300': !isActive,
              },
            )}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames('mt-5 block', {
            'text-white': isActive,
            'text-gray-200': !isActive,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
