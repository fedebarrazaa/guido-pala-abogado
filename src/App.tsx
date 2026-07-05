/*
RECIBE: 
ROUTER YPAGES
*/

import { DesingHome } from './pages/home/home'
import { BrowserRouter, Routes, Route, Link } from 'react-router';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesingHome />} />
       {/*  <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />*/}
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
