import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home';
import Users from './pages/Users';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Products from './pages/Products';
import { getALLCategories } from './serveces/apiShopier';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Categories from './pages/categories';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
}
