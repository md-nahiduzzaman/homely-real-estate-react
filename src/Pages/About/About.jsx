const About = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[50%] h-[100%]"
          />
          <div>
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="py-6">
              At Homely, we're more than just a business - we're a community
              dedicated to full fill your dream. Founded in 2002, we've been on
              a mission to make your dream true ever since.
            </p>
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="py-6">
              It all started with a passion for Residential. What began as a
              small team of enthusiasts has grown into a thriving enterprise,
              serving 582+ of customers worldwide. Our journey has been marked
              by make your dream true, and we're excited to continue pushing
              boundaries and making a positive impact.
            </p>
            <h3 className="text-2xl font-bold">Our Values</h3>
            <p className="py-6">
              At the heart of everything we do are our core values: integrity,
              innovation, customer-centricity. These principles guide our
              decisions, shape our culture, and define our interactions with
              customers, partners, and each other.
            </p>
          </div>
        </div>
        <div
          className="hero h-[30vh] mt-28 mb-28"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1512699355324-f07e3106dae5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">
                  Get Our Updates
                </h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">
                  Find out about events and other news
                </p>
                <div className="flex flex-row">
                  <input
                    type="text"
                    placeholder="example@email.com"
                    className="w-3/5 p-3  sm:w-2/3"
                  />
                  <button
                    type="button"
                    className="w-2/5 p-3 font-semibold  sm:w-1/3 btn rounded-none"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
