import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import App from './pages/App';
import MyTicket from './pages/MyTicket';
import DetailTicketPage from './pages/DetailTicketPage';
import FaqPages from './pages/FaqPages';
import NewsPage from './pages/NewsPage';
import NotificationPages from './pages/NotificationPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/ticket',
    element: <MyTicket />,
  },
  {
    path: '/detailticket',
    element: <DetailTicketPage />,
  },
  {
    path: '/faq',
    element: <FaqPages />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/notification',
    element: <NotificationPages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
