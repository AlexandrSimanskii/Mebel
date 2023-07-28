// import "swiper/scss/navigation";
// import "swiper/css/pagination";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product__slider">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="../../../public/images/image/chair.png" alt="chair" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair3.png" alt="chair" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair4.png" alt="chair" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair5.png" alt="chair" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../public/images/image/chair6.png" alt="chair" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={15}
        slidesPerView={4}
        navigation={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="a">
            <img src="../../../public/images/image/chair2.png" alt="chair" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="a">
            <img src="../../../public/images/image/chair3.png" alt="chair" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="a">
            <img src="../../../public/images/image/chair4.png" alt="chair" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="a">
            <img src="../../../public/images/image/chair5.png" alt="chair" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="a">
            <img src="../../../public/images/image/chair6.png" alt="chair" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
