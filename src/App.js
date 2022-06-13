import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from './Pages/Home/Home';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
