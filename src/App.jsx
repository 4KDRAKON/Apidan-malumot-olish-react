
import './App.css';
import { Home } from './components/api/home';
import { Routes,Route } from "react-router-dom";
import { Profil } from './components/api/profil';
function App() {
  return (
  <div className='section'>
  <Routes>
    <Route path='' element={<Home />} />
    <Route path='Profil/:user_id' element={<Profil />} />

  </Routes>
  </div>
  );
}

export default App;
