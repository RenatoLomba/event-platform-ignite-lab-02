import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { FC } from 'react';

import { DefaultUi, Player, Youtube } from '@vime/react';

import '@vime/core/themes/default.css';

import { useGetLessonBySlugQuery } from '../graphql/generated';
import { Footer } from './footer';
import { Button } from './shared/button';
import { CardButton } from './shared/card-button';

interface IVideoProps {
  lessonSlug: string;
}

export const Video: FC<IVideoProps> = ({ lessonSlug }) => {
  const { data } = useGetLessonBySlugQuery({ variables: { slug: lessonSlug } });

  if (!data || !data?.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  const { lesson } = data;

  return (
    <div className="flex-1 main-content-scrollable overflow-auto">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={lesson.videoId} />

            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-6 lg:p-8 max-w-[1100px] mx-auto">
        <section className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{lesson.title}</h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {lesson.description}
            </p>

            {!!lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={lesson.teacher.avatarURL}
                  alt="Teacher"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-fit">
            <Button as="a">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Button>

            <Button as="a" variant="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </section>

        <section className="gap-4 lg:gap-8 mt-20 grid grid-cols-1 lg:grid-cols-2">
          <CardButton
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            icon={<FileArrowDown size={40} />}
            href="#"
          />

          <CardButton
            title="Wallpapers do evento"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            icon={<Image size={40} />}
            href="#"
          />
        </section>

        <Footer className="mt-20" />
      </div>
    </div>
  );
};
