import Card from "./Card"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow} from 'swiper/modules';
const Features = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col px-[6vw] mt-4" id="qfeature">
     <h2 className="text-tirtary font-medium text-[14px] mt-8">QUALITY FEATURES</h2>
     <h3 className="text-secondary text-4xl font-semibold mt-1">Tutorials that people love most</h3>
     <div className="mt-8 w-full">
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          depth: 100,
          stretch: -50,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card star={4} reviews={392} watched="2,538" title="How to work with prototype design with adobe xd featuring tools"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card star={4} reviews={392} watched="2,538" title="How to work with prototype design with adobe xd featuring tools"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card star={4} reviews={392} watched="2,538" title="How to work with prototype design with adobe xd featuring tools"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card star={4} reviews={392} watched="2,538" title="How to work with prototype design with adobe xd featuring tools"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card star={4} reviews={392} watched="2,538" title="How to work with prototype design with adobe xd featuring tools"/>
        </SwiperSlide>
      </Swiper>
     </div>
    </div>
  )
}

export default Features