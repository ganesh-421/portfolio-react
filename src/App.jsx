import React, { useContext } from "react";
import "./App.css";
import Card from "./components/Card";
// import LoginForm from "./components/auth/LoginForm";
// import Header from "./components/Header";
import AuthContext from "./contexts/auth-context";
// import RegisterForm from "./components/auth/RegisterForm";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Timeline from "./components/Timeline";
// import List from "./components/List";
import Skill from "./components/Skills";
import Graph from "./components/Graph";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Fade, Zoom } from "react-awesome-reveal";
import Footer from "./components/Footer";

function App() {
  const context = useContext(AuthContext);
  return (
    <>
      <Navigation />
      <div className="">
        {/* <Backdrop onClick={null}>
          <Loader />
        </Backdrop>
        <div className="flex justify-center mt-24">
          {!context.isLoggedIn && (
            <Card>
              <LoginForm />
              <RegisterForm />
            </Card>
          )}
        </div> */}
        {/* <Header /> */}
        <Banner />

        {/* grid row */}

        <section className="bg-center bg-cover bg-no-repeat bg-[url('./src/assets/footer-bg.jpg')] bg-fixed">
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
                        <h4 className="text-gray-400 font-mono">
                          Ganesh Adhikari
                        </h4>
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
                            <h4 className="text-gray-400 font-mono">
                              Position
                            </h4>
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
        </section>
        {/* left flex right grid */}
        <section className="px-4 bg-center bg-cover bg-no-repeat bg-[url('./src/assets/footer-bg.jpg')] bg-fixed">
          <div className="max-w-screen-xl text-center py-4 flex flex-col items-center justify-around sm:flex-row sm:gap-5">
            <div className="sm:self-start">
              <h1 className="mb-4 text-xl font-bold tracking-tight leading-none text-white md:text-2xl lg:text-4xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
                Work Experience:
              </h1>
              <Fade direction="left" delay={500} triggerOnce>
                <Card className="px-0 border-l-0 sm:px-0 md:px-0">
                  <Timeline />
                </Card>
              </Fade>
            </div>
            <div className="sm:self-start grid gap-4 lg:grid-cols-2 place-items-center">
              <h1 className="sm:mt-0 text-xl font-bold tracking-tight leading-none text-white md:text-2xl lg:text-4xl col-span-1 lg:col-span-2">
                Learning Index:
              </h1>
              <Zoom duration={1000} direction="down" triggerOnce>
                <Card className="lg:p-3">
                  <div className="flex justify-center border-b border-b-gray-500 pb-2 mb-2">
                    <h3 className="text-white">Learning Index</h3>
                  </div>
                  <Graph />
                </Card>
                <Card className="lg:p-3">
                  <div className="flex justify-center border-b border-b-gray-500 pb-2 mb-2">
                    <h3 className="text-white">Learning Index</h3>
                  </div>
                  <Graph />
                </Card>
              </Zoom>
            </div>
          </div>
        </section>
        {/* right flex left grid */}
        <section className="px-4 bg-center bg-cover bg-no-repeat bg-[url('./src/assets/footer-bg.jpg')] bg-fixed">
          <div className="max-w-screen-xl text-center py-4 flex flex-col items-center justify-around sm:flex-row sm:gap-5">
            <div className="sm:self-start grid gap-4 lg:grid-cols-2 place-items-center">
              <h1 className="sm:mt-0 text-xl font-bold tracking-tight leading-none text-white md:text-2xl lg:text-4xl col-span-1 lg:col-span-2">
                Learning Index:
              </h1>
              <Zoom duration={1000} direction="down" triggerOnce>
                <Card className="lg:p-3">
                  <Graph />
                </Card>
                <Card className="lg:p-3">
                  <div className="flex justify-center border-b border-b-gray-500 pb-2 mb-2">
                    <h3 className="text-white">Learning Index</h3>
                  </div>
                  <Graph />
                </Card>
              </Zoom>
            </div>
            <div className="sm:self-start">
              <h1 className="mb-4 text-xl font-bold tracking-tight leading-none text-white md:text-2xl lg:text-4xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
                Work Experience:
              </h1>
              <Fade direction="right" triggerOnce>
                <Card className="px-0 border-l-0 sm:px-0 md:px-0">
                  <Timeline />
                </Card>
              </Fade>
            </div>
          </div>
        </section>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
