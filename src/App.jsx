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
import Graph from "./components/Graph";

import "swiper/css";
import "swiper/css/effect-cards";
import { Fade, Zoom } from "react-awesome-reveal";
import Footer from "./components/Footer";
import CardSlider from "./components/CardSlider";

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
          <CardSlider />
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
