import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={1500}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="../../../public/images/image/Main-Img.png" alt="" />
            <div className="banner__info">
              <h2 className="banner__title">
                loft <br />
                мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Анапе
              </p>
              <button className="banner__btn">СМОТРЕТЬ КАТАЛОГ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../public/images/image/img2.jpg" alt="" />
            <div className="banner__info">
              <h2 className="banner__title">
                loft <br />
                мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Анапе
              </p>
              <button className="banner__btn">СМОТРЕТЬ КАТАЛОГ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            
            <div className="banner__info">
              <h2 className="banner__title">
                loft <br />
                мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Анапе
              </p>
              <button className="banner__btn">СМОТРЕТЬ КАТАЛОГ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__info">
              <h2 className="banner__title">
                loft <br />
                мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Анапе
              </p>
              <button className="banner__btn">СМОТРЕТЬ КАТАЛОГ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__info">
              <h2 className="banner__title">
                loft <br />
                мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Анапе
              </p>
              <button className="banner__btn">СМОТРЕТЬ КАТАЛОГ</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__info">
              <h2 className="banner__title">
                loft <br />
                мебель
              </h2>
              <p className="banner__text">
                Современная и удобная мебель в Анапе
              </p>
              <button className="banner__btn">СМОТРЕТЬ КАТАЛОГ</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
