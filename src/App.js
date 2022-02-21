import { Route, Routes } from 'react-router-dom';
import './App.css';
import LeftComp from './components/left-comp';
import RightComp from './components/right-comp';
import Home from './pages/home';
import Profil from './pages/profils';


function App() {
  return (
      <div className="App">
      <LeftComp />
        <Routes>
          <Route path='/' exact element={<Home />}>Home</Route>
          <Route path='/profil' exact element={<Profil />}>Profile</Route>
        </Routes>
      <RightComp />
      </div>
    
  );
}

export default App;
