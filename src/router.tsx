import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { EventPage } from './pages/event';
import { SubscribePage } from './pages/subscribe';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SubscribePage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/event/lesson/:slug" element={<EventPage />} />
    </Routes>
  );
};
