import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from '../pages/Start/Start';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Start />,
      },
    ],
  },
]);

export default router;
