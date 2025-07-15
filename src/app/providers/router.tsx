import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../components/layout/Layout.tsx'
import Home from '../../pages/home/Home.tsx'
import Users from '../../pages/users/Users.tsx'
import Products from '../../pages/products/Products.tsx'
import User from '../../pages/user/User.tsx'
import Product from '../../pages/product/Product.tsx'
import Login from '../../pages/login/Login.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        path: '/products',
        element: <Products />,
      },
      {
        path: 'users/:id',
        element: <User />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
])
