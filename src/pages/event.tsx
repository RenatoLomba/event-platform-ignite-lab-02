import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../components/header';
import { Menu } from '../components/menu';
import { Sidebar } from '../components/sidebar';
import { Video } from '../components/video';

export const EventPage: FC = () => {
  const { slug } = useParams();

  return (
    <div className="flex flex-col min-h-screen" id="outer-container">
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Header id="page-wrap" />

      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar className="hidden md:block" />
      </main>
    </div>
  );
};
