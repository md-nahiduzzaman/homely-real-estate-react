const Contact = () => {
  const handaleSubmitbtn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container mx-auto">
        <div className=" grid h-[82vh] max-w-screen-xl grid-cols-1 lg:gap-16 px-8 py-16 mx-auto rounded-lg lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
          <div className="flex flex-col justify-between">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="space-y-2"
            >
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Get in Touch with Us
              </h2>
              <div className="text-gray-400">
                Reach out to us for any inquiries, feedback, or assistance we're
                here to help
              </div>
            </div>
          </div>
          <form
            data-aos="fade-left"
            data-aos-duration="1000"
            noValidate=""
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
              onClick={handaleSubmitbtn}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
