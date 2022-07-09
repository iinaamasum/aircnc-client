import React from 'react';
import user from '../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import img2 from '../../images/photo-1522708323590-d24dbb6b0267.jpeg';
import img1 from '../../images/photo-1560347876-aeef00ee58a1.jpeg';
import Navbar from '../../Shared/Navbar';

const Booking = () => {
  return (
    <>
      <Navbar />
      <section className="bg-base-100">
        {/* upper image  */}
        <div className="grid grid-cols-2">
          <img className="h-[70vh] w-full object-cover" src={img1} alt="" />
          <img className="h-[70vh] w-full object-cover" src={img2} alt="" />
        </div>
        {/* left and right booking part  */}
        <div className="container mx-auto px-3 sm:px-6 md:px-10 max-w-[1200px] my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            {/* left-side  */}
            <div className="w-full">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl md:text-3xl font-bold tracking-wide">
                    Light bright airy stylish apt and safe peaceful stay.
                  </h2>
                  <img className="h-20 w-20 rounded-full" src={user} alt="" />
                </div>
                <p className="text-gray-400 font-medium tracking-wide">
                  Dhaka, Bangladesh
                </p>
                <small className="text-gray-400 font-medium tracking-wide block">
                  4 guests 2 bedrooms 2 baths
                </small>
                <div class="divider"></div>
                <div className="">
                  <div className="my-4">
                    <h2 className="font-bold text-slate-700">Entire Room</h2>
                    <p className="text-sm text-gray-500 ml-7">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Fugit, quo.
                    </p>
                  </div>
                  <div className="my-4">
                    <h2 className="font-bold text-slate-700">Self check in</h2>
                    <p className="text-sm text-gray-500 ml-7">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Modi, ipsa!
                    </p>
                  </div>
                  <div className="my-4">
                    <h2 className="font-bold text-slate-700">
                      Sparkling Clean
                    </h2>
                    <p className="text-sm text-gray-500 ml-7">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sunt, aliquam.
                    </p>
                  </div>
                  <div className="my-4">
                    <h2 className="font-bold text-slate-700">
                      Best services at low cost
                    </h2>
                    <p className="text-sm text-gray-500 ml-7">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Laborum, veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
