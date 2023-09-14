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

const toCotalog=()=>{ navigate("/catalog");
setCategory("")}


  return (
    <section className="banner"  onClick={() => {
      toCotalog()
     }}>
      <div className="container">
        <Swiper
          loop={true}
          // autoplay={{ delay: 3000 }}
          speed={1500}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
       
        >
          
          <SwiperSlide
           
          >
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
          <SwiperSlide
            onClick={() => {
              navigate("/catalog");
            }}
          >
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
          <SwiperSlide onClick={() => navigate("/catalog")}>
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
          <SwiperSlide onClick={() => navigate("/catalog")}>
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
          <SwiperSlide onClick={() => navigate("/catalog")}>
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
          <SwiperSlide onClick={() => navigate("/catalog")}>
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
