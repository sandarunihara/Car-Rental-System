import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CarRentPage from './Components/CarRentPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Feedback from './Pages/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/carpage" element={<CarRentPage />} />
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        
      </Routes>
    </Router>
  );
}

function AdminLayout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <Routes>
          <Route path="add-owner" element={<AddOwner />} />
          <Route path="owner-details" element={<OwnerDetails />} />
          <Route path="view-feedback" element={<ViewFeedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
