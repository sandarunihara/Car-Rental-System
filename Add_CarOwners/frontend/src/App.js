import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CarRentPage from './Components/CarRentPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carpage" element={<CarRentPage />} />
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
