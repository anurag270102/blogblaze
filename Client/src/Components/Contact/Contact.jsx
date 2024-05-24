import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <section className="body-font  bg-[#031000] text-gray-400">
      <div className="container mx-auto px-5 py-12">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-5xl font-medium bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent ">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we would love to hear from you.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative cursor-pointer">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer w-full rounded border border-gray-700 bg-[#031000] bg-opacity-40 py-1 px-3 text-base leading-8  placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#FFB340] focus:bg-gray-900 focus:ring-2 focus:ring-[#FFB340]"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#FFB340] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FFB340]"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer w-full rounded border border-gray-700 bg-[#031000] bg-opacity-40 py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#FFB340] focus:bg-gray-900 focus:ring-2 focus:ring-[#FFB340]"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#FFB340] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FFB340]"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  className="peer h-32 w-full resize-none rounded border border-gray-700 bg-[#031000] bg-opacity-40 py-1 px-3 text-base leading-6 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#FFB340] focus:bg-gray-900 focus:ring-2 focus:ring-[#FFB340]"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#FFB340] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FFB340]"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <Link to={'/'}>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="inline-block rounded bg-[#FFB340] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[#FFB340] transition duration-150 ease-in-out hover:bg-[#FFB340] hover:shadow-[#FFB340] focus:bg-[#FFB340] focus:shadow-[#FFB340] focus:outline-none focus:ring-0 active:bg-[#FFB340] active:shadow-[#FFB340] motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
