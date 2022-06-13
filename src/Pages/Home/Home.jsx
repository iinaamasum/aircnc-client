import Navbar from '../../Shared/Navbar';
import HeaderSection from './HeaderSection';
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#fafafa',
      }}
    >
      <Navbar />
      <div className="container md:px-6 px-3 max-w-[1300px] mx-auto">
        <HeaderSection />
      </div>
    </div>
  );
};

export default Home;
