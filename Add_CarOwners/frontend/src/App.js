import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CarRentPage from './Components/CarRentPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Feedback from './Pages/Feedback';
import SideBar from './Components/SideBar';
import OwnerDetails from './Pages/OwnerDetails';
import AddOwner from './Pages/AddOwner';
import ViewFeedback from './Pages/ViewFeedback';
import AddcarDashboard from './Components/AddcarDashboard';
import VehicleDetails from './Pages/VehicleDetails';
import AddVehicle from './Pages/AddVehicle';
import { DisplayFeedback } from './Pages/DisplayFeedback';


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
        <Route path='/admin/*' element={<AdminLayout/>}/>
        <Route path='/Addcar/*' element={<AddcarLayout/>}/>
        <Route path='/displayfeedback' element={<DisplayFeedback/>}/>
        
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

function AddcarLayout(){
  return(
    <div className='flex'>
      <AddcarDashboard/>
      <div className='flex-grow'>
        <Routes>
          <Route path='vehicle-details' element={<VehicleDetails/>}/>
          <Route path='add-vehicle' element={<AddVehicle/>}/>
        </Routes>

      </div>
    </div>
  )
}

export default App;
