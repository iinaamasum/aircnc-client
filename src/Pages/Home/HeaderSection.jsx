import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
import PersonSelectionCard from './PersonSelectionCard';

const HeaderSection = () => {
  return (
    <section className="py-10 flex justify-between items-center">
      <div className="w-1/3 pr-10">
        <form>
          <div className="w-full py-5 px-5 rounded-lg bg-white shadow-lg my-2">
            <label className="text-lg font-bold uppercase py-0 my-0">
              Location
            </label>
            <input
              type="text"
              className="w-full py-1 outline-none text-[14px] placeholder:text-gray-300 placeholder:font-semibold"
              placeholder="Add city, Landmark or Address"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-full py-5 px-5 rounded-lg bg-white shadow-lg my-2">
              <label className="text-sm text-gray-300 font-semibold py-0 my-0">
                Arrival
              </label>
              <input
                type="date"
                className="w-full py-1 outline-none text-[14px] font-semibold"
                value={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="w-full py-5 px-5 rounded-lg bg-white shadow-lg my-2 relative">
              <label className="text-sm text-gray-300 font-semibold py-0 my-0">
                Departure
              </label>
              <input
                type="date"
                className="w-full py-1 outline-none text-[14px] font-semibold relative"
                value={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <PersonSelectionCard />
        </form>
      </div>
      <div className="2/3">
        <div className="">
          <div className="flex justify-between items-center text-[14px] font-bold mb-3">
            <p className="text-lg">Experiences</p>
            <Link
              className="flex justify-center items-center"
              to="all-experiences"
            >
              <span>Show all</span>
              <MdKeyboardArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <ExperienceCard key={item} />
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex justify-between items-center text-[14px] font-bold mb-3">
            <p className="text-lg">Homes</p>
            <Link
              className="flex justify-center items-center"
              to="all-experiences"
            >
              <span>Show all</span>
              <MdKeyboardArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <ExperienceCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
