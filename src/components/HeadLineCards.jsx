import React from "react";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1640px] max-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* {Cards} */}
      <div className="rounded-xl relative">
        {/* {Overlay} */}
        <div className="absolute w-full h-full rounded-xl bg-black/40 text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's out, BOGO's Out</p>
          <p className="px-2 text-white">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-6 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* {Overlay} */}
        <div className="absolute w-full h-full rounded-xl bg-black/40 text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurents</p>
          <p className="px-2 text-white">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-6 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* {Overlay} */}
        <div className="absolute w-full h-full rounded-xl bg-black/40 text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts To</p>
          <p className="px-2 text-white">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-6 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
