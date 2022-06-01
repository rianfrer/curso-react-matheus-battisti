import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/empresa' element={<Empresa/>}></Route>
        <Route exact path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )

}

export default App;
