/*
RECIBE: 
ROUTER Y LAYOUT
*/
import { Layout } from './pages/layout/layout'
import { DesingHome } from './pages/home/home'
import { DesingSobreMi } from './pages/sobre_mi/sobreMi'
import { DesingContacto } from './pages/contacto/contacto'
import { DesingAreas } from './pages/areas/areas'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';



  const router = createBrowserRouter ([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <DesingHome /> },
        { path: "/sobre-mi", element: <DesingSobreMi /> },
        { path: "/areas", element: <DesingAreas /> },
        { path: "/contacto", element: <DesingContacto />}
      ]
    }
  ])

const App = () => <RouterProvider router={router} />;
export default App;

