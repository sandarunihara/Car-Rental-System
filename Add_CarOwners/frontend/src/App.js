import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CarRentPage from './Components/CarRentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carpage" element={<CarRentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
