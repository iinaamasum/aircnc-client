const ExperienceCard = () => {
  return (
    <div class="card-compact ">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="my-2">
        <h5 className="text-[12px] font-bold uppercase">location</h5>
        <h2 class="card-title">Shoes!</h2>
        <p className="text-[12px] font-semibold text-gray-400">
          $35 per person
        </p>
        <div className="">
          <div class="rating">
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star h-4 w-4 bg-orange-500"
              //checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star h-4 w-4 bg-orange-500"
              //checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star h-4 w-4 bg-orange-500"
              //checked
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star h-4 w-4 bg-gray-300"
            />
            <input
              type="radio"
              name="rating-1"
              class="mask mask-star h-4 w-4 bg-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
