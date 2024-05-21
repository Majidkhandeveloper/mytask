const ContactUs = () => {
  return (
    <div className="relative  bg-bayra-form  border-2 border-[#424242] space-y-20 bg-[#2E2D2E] px-28 py-10   text-white  max-w-[1229px]  mx-auto   rounded-[60px]">
      <div className="flex flex-col gap-4 ">
        <p className="text-4xl leading-7 font-bold">Conatc Us.</p>
        <p className="text-[64px] font-bold leading-[78px]  w-44 absolute top-14 right-20 text-[#7B7B7B]">
          Get in Touch
        </p>
      </div>

      <div className="flex gap-8  relative ">
        <div>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>

              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>

              <div class="w-full md:w-full px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>

              <div class="w-full md:w-full px-3 mt-2">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Phone Number{" "}
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="Number"
                  placeholder="Number"
                />
              </div>

              <div class="w-full md:w-full px-3 mt-2">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Message{" "}
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                />
              </div>

              <div class="w-full md:w-full px-3 mt-2">
                <input
                  id="inline-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="inline-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Ypu agree to our Friendly{" "}
                  <span className="underline">Privacy Policy</span>
                </label>
              </div>

              <div className="w-full md:w-full px-3 mt-2">
                <button className="text-black  bg-white w-full md:w-full px-3 mt-2">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3">
          Step into a world where art meets blockchain technology. Our exclusive
          collection of non-fungible tokens (NFTs) showcases some of the most
          unique and stunning works of digital art from talented artists around
          the world. Each NFT is a one-of-a-kind creation, verified on the
          blockchain, and is sure to capture the attention of any collector or
          art enthusiast.
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
