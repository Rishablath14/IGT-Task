import Card from "./Card"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import axios from 'axios';
// import required modules
import { useEffect, useState} from "react";
const Features = () => {
  const [review,setReview] = useState(null);
  useEffect(()=>{
   axios.get("http://localhost:5000/reviews").then((res)=>{setReview(res.data)});
  },[])
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col px-[6vw] mt-4" id="qfeature">
     <h2 className="text-tirtary font-medium text-[14px] mt-8">QUALITY FEATURES</h2>
     <h3 className="text-secondary text-4xl font-semibold mt-1">Tutorials that people love most</h3>
     <div className="mt-8 w-full">
     <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop
        spaceBetween={30}
        slidesPerView={3}
        className="mySwiper"
      >{review &&
        review.map((rev,idx)=>
        <SwiperSlide key={idx}>
          <Card image={rev.image} star={rev.star} reviews={rev.review} watched={rev.watched} title={rev.title}/>
        </SwiperSlide>
        )
        }
      </Swiper>
     </div>
    </div>
  )
}

export default Features