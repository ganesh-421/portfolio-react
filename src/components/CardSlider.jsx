import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import Skill from "./Skills";
import Card from "./Card";

export default function CardSlider() {
  return (
    <div className="max-w-sm z-30 mx-7 sm:mx-auto w-3/4 sm:w-full">
      <Fade direction="right" triggerOnce>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 1500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          width={300}
        >
          <SwiperSlide className="skill">
            <Skill title="Laravel" />
          </SwiperSlide>
          <SwiperSlide>
            <Skill title="React" />
          </SwiperSlide>
          <SwiperSlide className="skill">
            <Skill title="Django" />
          </SwiperSlide>
          <SwiperSlide className="skill">
            <Skill title="Php" />
          </SwiperSlide>
          <SwiperSlide className="skill">
            <Skill title="Js" />
          </SwiperSlide>
          <SwiperSlide>
            <Card className="bg-white dark:bg-slate-800 !p-0 sm:p-0 md:p-0 cursor-pointer hover:shadow-xl hover:shadow-slate-200 border-0 rounded-xl">
              <div className="grid grid-cols-4 grid-rows-[100px_minmax(100px,_1fr)_40px]">
                <div className="row-start-1 row-end-1 col-start-1 col-end-5 bg-blue-400 h-4 rounded-t-xl"></div>
                <img
                  className="rounded-full w-4/5 col-start-1 col-end-1 row-start-1 row-end-1 self-center sm:mt-5 mx-3"
                  src="./src/assets/footer-image-3.jpg"
                  alt="footer image"
                />
                <div className="px-3 row-start-1 col-start-3 col-end-5 self-center">
                  <h4 className="text-gray-400 font-mono">Ganesh Adhikari</h4>
                </div>
                <div className="row-start-2 row-end-3 col-start-1 col-end-5 self-center px-1">
                  <div className="flex flex-col">
                    <div className="flex text-left gap-x-5">
                      <h4 className="text-gray-400 font-mono">Company</h4>
                      <h4 className="text-gray-400 font-mono">:</h4>
                      <h4 className="text-gray-400 font-mono break-all">
                        Websoft Technology Nepal
                      </h4>
                    </div>
                    <div className="flex text-left gap-x-5">
                      <h4 className="text-gray-400 font-mono">Position</h4>
                      <h4 className="text-gray-400 font-mono">:</h4>
                      <h4 className="text-gray-400 font-mono break-all">
                        Fullstack Web developer
                      </h4>
                    </div>
                    <div className="flex text-left gap-x-5">
                      <h4 className="text-gray-400 font-mono">Address</h4>
                      <h4 className="text-gray-400 font-mono">:</h4>
                      <h4 className="text-gray-400 font-mono break-all">
                        Modi-5, Bajung Parbat
                      </h4>
                    </div>
                    <div className="flex text-left gap-x-5">
                      <h4 className="text-gray-400 font-mono">Contact</h4>
                      <h4 className="text-gray-400 font-mono">:</h4>
                      <h4 className="text-gray-400 font-mono break-all">
                        +977-9864434149
                      </h4>
                    </div>
                    <div className="flex text-left gap-x-5">
                      <h4 className="text-gray-400 font-mono">Email</h4>
                      <h4 className="text-gray-400 font-mono">:</h4>
                      <h4 className="text-gray-400 font-mono break-all">
                        ganesh410adhikari@gmail.com
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="row-start-3 row-end-4 col-start-1 col-end-5 bg-blue-400 h-4 rounded-b-xl self-end"></div>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
}
