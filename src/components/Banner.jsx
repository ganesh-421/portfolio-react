export default function Banner() {
  return (
    // <section className="bg-center bg-cover bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply bg-fixed">
    // <section className="bg-center bg-cover bg-no-repeat bg-gradient-to-r from-gray-800 md:via-gray-700 via-gray-900 md:to-gray-100 to-gray-900 bg-fixed">
    <section className="bg-center bg-cover bg-no-repeat bg-[url('./src/assets/footer-bg.jpg')] bg-fixed">
      <div className="px-4 py-5 mx-auto max-w-screen-xl text-center  flex items-center">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Welcome to my portfolio
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            🚀 Full Stack Web Developer 🌐 Passionate about crafting seamless
            web experiences with Laravel and React. From server-side logic to
            engaging user interfaces, I bring ideas to life in the digital
            realm. Let's build something extraordinary together!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex-start">
          <img
            className="hidden md:flex h-auto max-w-full"
            src="./src/assets/side-image-full.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
