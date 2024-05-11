import Card from "./Card"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow} from 'swiper/modules';
import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
const Tutorial = () => {
  const [review,setReview] = useState(null);
  useEffect(()=>{
   axios.get("http://localhost:5000/reviews").then((res)=>{setReview(res.data)});
  },[])
  return (
    <div className="flex w-full gap-4 min-h-screen justify-center items-center px-[6vw] pt-12">
      <div className="w-[60%] relative flex items-center justify-center bg-cover bg-no-repeat bg-[url('./map.png')]">
       <div className="absolute bg-[#25CB9E] p-2 rounded-md z-[8] text-white flex items-center gap-2 right-0 translate-y-6"><CircleCheck color="#25CB9E" fill="#fff" /> Free tutorial</div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        // centeredSlides={true}
        loop
        slidesPerView={1.3}
        coverflowEffect={{
          rotate: 0,
          depth: 300,
          stretch: 50,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper ml-20 mr-12"
      >
        {review &&
        review.map((rev,idx)=>
        <SwiperSlide key={idx}>
          <Card image={rev.image} star={rev.star} reviews={rev.review} watched={rev.watched} title={rev.title}/>
        </SwiperSlide>
        )
        }
      </Swiper>
      </div>
      <div className="w-[40%] flex flex-col justify-center -mt-24">
        <div>
        <h2 className="text-tirtary font-medium text-[14px] mt-8 mb-2">
        FREE TUTORIAL
        </h2>
        <h3 className="text-5xl text-secondary font-semibold">
        More than  thousand of free tutorial upload every weeks
        </h3>
        <p className="text-secondary text-[18px] my-6">
        Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
        </p>
        <button className="text-[#EF9E48] p-2 rounded-md bg-[#ffcf9c87] font-medium text-base">
          Explore details
        </button>
        </div>
      </div>
    </div>  
  )
}

export default Tutorial