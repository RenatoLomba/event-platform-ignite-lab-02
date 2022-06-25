import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './lesson';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const { slug } = useParams();

  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={`w-[348px] bg-gray-700 p-6 border-l border-gray-600 main-content-scrollable ${className}`}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            isActive={lesson.slug === slug}
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug!}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};
