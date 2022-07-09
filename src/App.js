import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import UpdateProfile from './Pages/Auth/UpdateProfile';
import Home from './Pages/Home/Home';
import HostHome from './Pages/Home/HostHome';
import ShareExperience from './Pages/Home/ShareExperience';
import Footer from './Shared/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="max-w-[1800px] mx-auto">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/updateProfile" element={<UpdateProfile />}></Route>
        <Route path="/hostHome" element={<HostHome />}></Route>
        <Route path="/experience" element={<ShareExperience />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
