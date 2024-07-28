import Directors from './pages/Directors'
import Actors from './pages/Actors'
import Movie from './pages/Movie'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

const routes = [
   {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: '/directors',
    element: <Directors />,
    errorElement: <ErrorPage />
   },
   {
    path: '/actors',
    element: <Actors />,
    errorElement: <ErrorPage />
   },
   {
    path: '/movie/:id',
    element: <Movie />,
    errorElement: <ErrorPage />
   }
  ];

export default routes;