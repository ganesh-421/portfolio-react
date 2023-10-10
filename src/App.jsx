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
        <footer className="relative py-10 flex flex-col items-center bg-cyan-900 overflow-hidden md:pt-32">
          <div className="relative z-[1] container m-auto px-6 md:px-12">
            <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
              <div className="flex flex-wrap items-start gap-5 justify-between lg:flex-nowrap">
                <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                  <ul className="list-disc list-inside space-y-5">
                    <li>
                      <a href="#" className="hover:text-sky-400 transition">
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="#" className="hover:text-sky-400 transition">
                        About
                      </a>
                    </li>

                    <li>
                      <a href="#" className="hover:text-sky-400 transition">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul className="list-disc list-inside space-y-5">
                    <li>
                      <a href="#" className="hover:text-sky-400 transition">
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="#" className="hover:text-sky-400 transition">
                        About
                      </a>
                    </li>

                    <li>
                      <a href="#" className="hover:text-sky-400 transition">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul role="list" className="space-y-5">
                    <li>
                      <a
                        href="#"
                        className="flex items-center space-x-3 hover:text-sky-400 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span>Github</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center space-x-3 hover:text-sky-400 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center space-x-3 hover:text-sky-400 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center space-x-3 hover:text-sky-400 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full space-y-6 text-center sm:text-left sm:w-full">
                  <span className="block text-gray-300 text-center">
                    Tailus Blocks &copy; 2021
                  </span>

                  <span className="flex justify-between text-white">
                    <a href="#" className="font-semibold">
                      Terms of Use{" "}
                    </a>
                    <a href="#" className="font-semibold">
                      {" "}
                      Privacy Policy
                    </a>
                  </span>
                  <span className="block text-gray-300 text-center">
                    Need help?{" "}
                    <a href="#" className="font-semibold text-white">
                      {" "}
                      Contact Us
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute h-full inset-0 flex items-center"
          >
            <div
              aria-hidden="true"
              className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
            ></div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
          ></div>
        </footer>
      </div>
    </>
  );
}

export default App;
