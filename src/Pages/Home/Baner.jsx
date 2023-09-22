import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { CustomContext } from "../../utils/Context/Context";
import { Fragment, useContext } from "react";

const Banner = () => {
  const { setCategory } = useContext(CustomContext);

  const navigate = useNavigate();

  const toCotalog = () => {
    navigate("/catalog");
    setCategory("");
  };

  return (
    <section className="banner">
      <div className="container">
        <div className="banner__inner">
          <Swiper
            loop={true}
            // autoplay={{ delay: 3000 }}
            speed={1500}
            navigation={{
              nextEl: ".myslider-next",
              prevEl: ".myslider-prev",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="../../../public/images/image/Main-Img.png" alt="" />
            </SwiperSlide>
            <SwiperSlide
              onClick={() => {
                navigate("/catalog");
              }}
            >
              <img src="../../../public/images/image/slider.png" alt="" />
            </SwiperSlide>
            <SwiperSlide onClick={() => navigate("/catalog")}>
              <img src="../../../public/images/image/Main-Img.png" alt="" />
              <div className="banner__info">
                <h2 className="banner__title">
                  loft <br />
                  мебель
                </h2>
                <p className="banner__text">
                  Современная и удобная мебель в Анапе
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => navigate("/catalog")}>
              <img src="../../../public/images/image/slider.png" alt="" />
            </SwiperSlide>
            <SwiperSlide onClick={() => navigate("/catalog")}>
              <img src="../../../public/images/image/Main-Img.png" alt="" />
            </SwiperSlide>
            <SwiperSlide onClick={() => navigate("/catalog")}>
              <img src="../../../public/images/image/slider.png" alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="myslider__btns">
            <button className="myslider-prev">
              <img src="../../public/images/icons/Tick2.svg" alt="arrow" />
            </button>
            <button className="myslider-next">
              <img src="../../../public/images/icons/Tick2.svg" alt="arrow" />
            </button>
          </div>
          <div className="banner__info">
            <h2 className="banner_title">
              loft <br />
              мебель
            </h2>
            <p className="banner_text">
              Современная и удобная мебель <span>в Анапе</span>
            </p>
            <button
              onClick={() => {
                toCotalog();
              }}
              className="banner_btn"
            >
              СМОТРЕТЬ КАТАЛОГ
            </button>
          </div>
        </div>
        <div className="banner-mini">
          <img src="../../../public/images/image/banner375.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
