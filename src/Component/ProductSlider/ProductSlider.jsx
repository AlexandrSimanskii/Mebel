import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
const ProductSlider = () => {
  return (
    <div>
      <img src="../../../public/images/image/chair.png" alt="" />
      <Swiper
        navigation
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img src="../../../public/images/image/chair2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair6.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
