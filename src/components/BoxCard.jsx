import { Mocca } from "../assets/images";

const BoxCard = () => {
  return (
    <section className="bg-orange-100 py-24 mt-24 relative h-[70vh]">
      <div className="container mx-auto grid md:grid-cols-3 gap-4">
        <div className="h-24 ">
          <img
            src={Mocca}
            alt="coconutLeaf"
            className="w-[40%] absolute top-[10%] right-[70%] transform translate-x-1/2 z-10"
            id="coconutLeaf"
          />
        </div>
        <div className=" py-24  absolute bottom-[2%] right-[42%] transform translate-x-1/2 z-10">
          <span className="subheader text-5xl mb-[-50px] absolute">say it</span>
          <h3 className="header text-[800%] relative">Simply</h3>
          <p>
            Send meaningful boxes of Belgian chocolates <br /> with messages for
            every occasion
          </p>
          <button className="bg-[#926550] py-2 px-8 rounded-lg text-orange-100 font-semibold mt-4">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoxCard;
