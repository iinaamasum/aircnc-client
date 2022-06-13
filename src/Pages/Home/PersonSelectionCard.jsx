import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
const PersonSelectionCard = () => {
  const [people, setPeople] = useState({
    adults: 1,
    children: 0,
    babies: 0,
  });
  return (
    <section className="shadow-lg p-4 bg-white rounded-lg mt-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <p className="font-medium text-gray-300">Guests</p>
            <p className="font-bold uppercase text-[14px]">2 Adults, 1 Child</p>
          </div>
        </div>
        <div className="">
          <IoIosArrowUp size={25} />
        </div>
      </div>
      <div class="divider"></div>
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <p className="font-bold uppercase text-[14px]">Adults</p>
          <div className="flex justify-center items-center font-bold">
            <AiOutlinePlus
              className="cursor-pointer bg-gray-50 p-1 rounded"
              size={20}
            />
            <p className="font-bold mx-2">{people.adults}</p>
            <AiOutlineMinus
              className="cursor-pointer bg-gray-50 p-1 rounded"
              size={20}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="">
            <p className="font-bold uppercase text-[14px]">Children</p>
            <p className="text-[12px] font-semibold text-gray-300">Age: 3-12</p>
          </div>
          <div className="flex justify-center items-center font-bold">
            <AiOutlinePlus
              className="cursor-pointer bg-gray-50 p-1 rounded"
              size={20}
            />
            <p className="font-bold mx-2">{people.children}</p>
            <AiOutlineMinus
              className="cursor-pointer bg-gray-50 p-1 rounded"
              size={20}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <p className="font-bold uppercase text-[14px]">Babies</p>
            <p className="text-[12px] font-semibold text-gray-300">Age: 0-3</p>
          </div>
          <div className="flex justify-center items-center font-bold">
            <AiOutlinePlus
              className="cursor-pointer bg-gray-50 p-1 rounded"
              size={20}
            />
            <p className="font-bold mx-2">{people.babies}</p>
            <AiOutlineMinus
              className="cursor-pointer bg-gray-50 p-1 rounded"
              size={20}
            />
          </div>
        </div>
      </div>
      <button className="bg-[#251D58] btn hover:bg-[#0c0924f2]  w-full mt-4">
        Search
      </button>
    </section>
  );
};

export default PersonSelectionCard;
