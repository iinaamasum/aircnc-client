import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineClear,
  AiOutlineDollarCircle,
  AiOutlineHome,
  AiOutlineStar,
} from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
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
                  <h2 className="text-xl md:text-3xl font-bold tracking-wide w-9/12">
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
                    <h2 className="font-bold text-slate-700 inline-flex justify-center items-center">
                      <AiOutlineHome size={20} className="mr-2" />
                      Entire Room
                    </h2>
                    <p className="text-sm text-gray-500 ml-10">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Fugit, quo.
                    </p>
                  </div>
                  <div className="my-4">
                    <h2 className="font-bold text-slate-700 inline-flex justify-center items-center">
                      <AiOutlineCheckCircle size={20} className="mr-2" />
                      Self check in
                    </h2>
                    <p className="text-sm text-gray-500 ml-10">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Modi, ipsa!
                    </p>
                  </div>
                  <div className="my-4">
                    <h2 className="font-bold text-slate-700 inline-flex justify-center items-center">
                      <AiOutlineClear size={20} className="mr-2" />
                      Sparkling Clean
                    </h2>
                    <p className="text-sm text-gray-500 ml-10">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sunt, aliquam.
                    </p>
                  </div>
                  <div className="my-4">
                    <h2 className="font-bold text-slate-600 inline-flex justify-center items-center">
                      <AiOutlineDollarCircle size={20} className="mr-2" />
                      Best services at low cost
                    </h2>
                    <p className="text-sm text-gray-500 ml-10">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aut, incidunt. Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Laborum, veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* right-side  */}
            <div className="shadow-md">
              <div className="p-3 md:p-5 lg:p-10">
                <div className="flex justify-between items-center">
                  <p className="text-3xl md:text-4xl font-semibold text-orange-500">
                    $34/
                    <span className="text-lg text-slate-500 font-medium">
                      night
                    </span>{' '}
                  </p>
                  <p className="inline-flex items-center justify-center">
                    <AiOutlineStar className="text-orange-500 mr-1" /> 4.9
                    <span className="text-slate-500 ml-2">(20 reviews)</span>
                  </p>
                </div>
                <div className="divider"></div>
                <div className="">
                  <div className="mb-2">
                    <p className="font-bold text-slate-900">Dates</p>
                    <div className="text-orange-500 font-semibold border-[1px] border-slate-400 flex items-center justify-between px-5 py-1 rounded-lg relative">
                      <p>10/11/2022</p>{' '}
                      <BsArrowRight size={25} className="absolute left-[50%]" />
                      <p>12/11/2022</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p>Guests</p>
                    <div className="w-full">
                      <select class="select select-accent w-full focus:outline-none">
                        <option selected>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                        <option>5 Guests</option>
                      </select>
                    </div>
                    <div className="mt-4 px-2">
                      <div className="flex items-center justify-between relative">
                        <p className="text-slate-600 font-medium">
                          $34 * 4 nights
                        </p>
                        <BsArrowRight
                          size={20}
                          className="absolute left-[50%]"
                        />
                        <p className="text-orange-500 font-semibold text-lg">
                          $136
                        </p>
                      </div>
                      <div className="divider my-1"></div>
                      <div className="flex items-center justify-between relative">
                        <p className="text-slate-600 font-medium">
                          Cleaning Fee
                        </p>
                        <BsArrowRight
                          size={20}
                          className="absolute left-[50%]"
                        />
                        <p className="text-orange-500 font-semibold text-lg">
                          $20
                        </p>
                      </div>
                      <div className="divider my-1"></div>
                      <div className="flex items-center justify-between relative">
                        <p className="text-slate-600 font-medium">
                          Service Cost
                        </p>
                        <BsArrowRight
                          size={20}
                          className="absolute left-[50%]"
                        />
                        <p className="text-orange-500 font-semibold text-lg">
                          $30
                        </p>
                      </div>
                      <div className="divider my-1"></div>
                      <div className="flex items-center justify-between relative">
                        <p className="text-slate-600 font-medium text-2xl">
                          Total
                        </p>
                        <BsArrowRight
                          size={30}
                          className="absolute left-[50%]"
                        />
                        <p className="text-orange-500 font-semibold text-2xl">
                          $186
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="">
            <h2 className="text-2xl text-center mb-2 font-medium">
              About the service we provide and agreement
            </h2>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              magnam rem cum odio repellat, sapiente cupiditate iusto, cumque
              neque, fuga reprehenderit quis laboriosam et perspiciatis debitis!
              Amet temporibus modi ducimus facere voluptatum, sed eligendi
              nostrum vel sapiente quis! Quia saepe molestias quam quos!
              Nesciunt maiores quibusdam recusandae, doloremque nostrum
              reprehenderit numquam rerum. Quia soluta nesciunt harum ea quos
              officiis alias maxime atque fuga nihil. Tempore nobis molestiae
              dolor minima saepe, et officiis corporis, facere quibusdam sed
              quisquam quos, totam odit laborum consequuntur odio sit! Veritatis
              magni quis incidunt dicta modi cum adipisci commodi dignissimos,
              ipsum quam saepe dolores magnam blanditiis itaque rerum
              consectetur est temporibus eligendi? Ut beatae, molestias eaque
              tempora sunt cum libero praesentium, error esse adipisci veniam
              aliquam voluptas unde eius atque, et quia iusto! <br />
              <br /> Nihil minima asperiores exercitationem ipsum quidem aliquam
              magnam harum modi debitis impedit ducimus, tempore neque ab est
              nisi, maxime non, voluptas magni! Earum dicta voluptas, nam
              assumenda molestias fuga nesciunt omnis ex repudiandae possimus
              eveniet, odit laboriosam rerum asperiores blanditiis facere.
              Molestiae suscipit labore, iure commodi aliquid ab animi!
              Doloremque rerum error harum nesciunt laudantium temporibus ipsum
              soluta, dolorem maiores beatae dolorum ducimus, non aliquam sed
              obcaecati nulla. Libero vel asperiores adipisci sed. Temporibus,
              totam perspiciatis dolor quaerat provident facere aliquam! Quasi
              saepe pariatur qui neque et facere maiores est, aspernatur
              reprehenderit vero. <br />
              <br /> Dolores obcaecati possimus, numquam quis labore earum
              laboriosam quidem ratione molestiae iusto temporibus debitis id
              maxime quibusdam doloremque, assumenda aperiam. Dolorem, natus
              cupiditate aliquam a ipsam consequuntur voluptatem voluptate
              reiciendis sit ullam quam, quas odio, numquam animi. Vero placeat
              nostrum, tempora, ea quaerat quos ab id corporis nisi fuga dicta!
              Quaerat sed laboriosam velit voluptatibus ipsam vitae. Tenetur,
              quis! Sit ex aliquam aspernatur enim qui tenetur, quibusdam
              inventore, dignissimos laboriosam molestiae error exercitationem?
              Ullam, excepturi pariatur molestiae ab nam quae?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
