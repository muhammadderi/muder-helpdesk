import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import App from './pages/App';
import MyTicket from './pages/MyTicket';
import FaqPages from './pages/FaqPages';
import NewsPage from './pages/NewsPage';
import NotificationPages from './pages/NotificationPages';
import TicketDetail from './components/TicketDetail';

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
  {
    path: '/detail/:id',
    element: <TicketDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
