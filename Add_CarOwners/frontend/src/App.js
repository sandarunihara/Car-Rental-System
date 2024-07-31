import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CarRentPage from './Components/CarRentPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Feedback from './Pages/Feedback';
import AddOwner from './Pages/AddOwner';
import OwnerDetails from './Pages/OwnerDetails';
import ViewFeedback from './Pages/ViewFeedback';
import SideBar from './Components/SideBar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/carpage" element={<CarRentPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Admin Routes with Sidebar */}
        <Route path="/admin/*" element={<AdminLayout />} />
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
