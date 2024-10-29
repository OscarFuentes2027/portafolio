// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/effect-cards.css';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className="container-lg">

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
          </div>
    </>
  );
}
