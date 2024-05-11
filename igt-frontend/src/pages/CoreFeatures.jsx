import { MoveDown } from "lucide-react";

const CoreFeatures = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center px-[6vw] pt-12">
      <div className="w-[50%] h-screen relative">
        <div className="absolute z-[6] top-[50%] -translate-y-[50%] w-full h-[300px] -left-[10%] bg-gradient-to-br from-[#FFFDE612] to-[#E0EFFA] blur-lg rounded-r-[100px]"></div>
        <div className="flex z-[7] bg-white hover:-translate-y-4 transition-all justify-center items-center flex-col w-[220px] h-[240px] shadow-lg rounded-lg absolute top-[12%] right-[50%]">
          <h2 className=" text-7xl font-bold text-[#EF9E48]">80K+</h2>
          <p className="text-secondary text-[18px] max-w-[85%] text-center mt-2">
            we have more than students
          </p>
        </div>
        <div className="flex z-[7] bg-white hover:-translate-y-4 transition-all justify-center items-center flex-col w-[220px] h-[240px] shadow-lg rounded-lg absolute top-[2%] right-[10%]">
          <h2 className=" text-7xl font-bold text-[#FF753A]">150+</h2>
          <p className="text-secondary text-[18px] max-w-[85%] text-center mt-2">
            Free online tutorials videos avaialble
          </p>
        </div>
        <div className="flex z-[7] bg-white hover:-translate-y-4 transition-all justify-center items-center flex-col w-[220px] h-[240px] shadow-lg rounded-lg absolute top-[50%] right-[50%]">
          <h2 className=" text-7xl font-bold text-[#FA578E]">90+</h2>
          <p className="text-secondary text-[18px] max-w-[85%] text-center mt-2">
            Daily updated blog post maintain
          </p>
        </div>
        <div className="flex z-[7] bg-white hover:-translate-y-4 transition-all justify-center items-center flex-col w-[220px] h-[240px] shadow-lg rounded-lg absolute top-[40%] right-[10%]">
          <h2 className=" text-7xl font-bold text-[#E682FF]">& 3M</h2>
          <p className="text-secondary text-[18px] max-w-[85%] text-center mt-2">
            Job posted everydays with qualification
          </p>
        </div>
        <div className="absolute top-[80%] right-[10%] cursor-pointer" onClick={()=>{window.scrollTo({top:2050,behavior: "smooth"})}}><MoveDown size={30} color="#343D48"/></div>
      </div>
      <div className="w-[50%] flex flex-col justify-center -mt-24">
        <div>
        <h2 className="text-tirtary font-medium text-[14px] mt-8 mb-2">
          CORE FEATURES
        </h2>
        <h3 className="text-5xl text-secondary font-semibold">
          Smart Jackpots that you may love this anytime & anywhere
        </h3>
        <p className="text-secondary text-[18px] my-6">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button className="text-[#EF9E48] p-2 rounded-md bg-[#ffcf9c87] font-medium text-base">
          Explore details
        </button>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
