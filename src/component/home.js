const home = () => {
  return /*html*/ `
    <section class="max-w-[1920px] mx-auto relative z-10 h-full sm:px-6">
      
    <div class="absolute w-10/12 sm:top-1/2 top-[45%] left-1/2 -translate-x-1/2 translate-y-1/2 group-[.explore]:text-to-up transition-all duration-700 ease-out flex flex-col items-center gap-12 landscape:-mt-[min(15rem,calc(10_*_5vw))] -mt-[min(20rem,calc(20_*_5vw))]">
          <div class="flex flex-col gap-4">
            <h1 class="text-5xl font-bold text-center">welcome to space-x</h1>
            <h3 class="text-lg opacity-50 text-center">
              explore an amazing new world.
            </h3>
          </div>
          <a href='#explore'
            class="hover:opacity-70 transition-opacity bg-white w-16 h-16 rounded-full inline-flex justify-center items-center"
          >
            <svg
              class="w-1/2 cursor-pointer fill-black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.707,17.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L16.293,7.707a1,1,0,0,1,1.414-1.414l5,5a1,1,0,0,1,0,1.414Z"
              />
            </svg>
          </a>
        </div>

        <div class="w-10/12 sm:max-w-fit absolute sm:top-1/2 top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 invisible transition-all duration-700 ease-out sm:min-w-[30rem] sm:group-[.proceed.explore]:text-to-right group-[.explore]:text-to-button sm:group-[.explore]:text-to-left  flex flex-col sm:basis-1/2 gap-12 landscape:-mt-[min(15rem,calc(10_*_5vw))] -mt-[min(20rem,calc(20_*_5vw))]">
          <div class="flex flex-col gap-4">
          <div class="grid">
          <h2 class="group-[.proceed]:opacity-0 opacity-100 duration-700 transition-opacity col-start-1 row-start-1 text-3xl font-bold text-center sm:text-left">plan your family trip into space.</h2>
          <h2 class="group-[.proceed]:opacity-100 opacity-0 duration-700 transition-opacity  col-start-1 row-start-1 text-3xl font-bold text-center sm:text-left">check out the available trips.</h2>
          </div>
          <h3 class="text-lg opacity-50 text-center sm:text-left">
              we assure you that is going to be an amazing journey 
            </h3>
          </div>
          <div class=" items-center sm:items-start sm:group-[.proceed]:flex-row flex flex-col gap-4">
          
          <button
          id="proceed"
          class=" hover:opacity-70 transition-opacity border border-white sm:px-6 sm:py-2 sm:text-2xl px-4 py-1 rounded-md text-xl capitalize
          "
          >
          proceed
          </button>
          
          <a class="group-[.proceed]:opacity-100 group-[.proceed]:visible group-[.proceed]:h-auto h-0 transition-opacity duration-700 invisible opacity-0" href="#about">
          <button
          class=" hover:opacity-70 border border-white sm:px-6 sm:py-2 sm:text-2xl px-4 py-1 rounded-md text-xl capitalize
          "
          >home
          </button>
          </a>
          </div>
        </div>
      </section>
      <div class="transition-all duration-1000 ease-out max-w-[1920px] group-[.proceed]:earth-to-left group-[.explore]:earth-to-up absolute translate-x-1/2 rotate-0 right-1/2 top-[80%] w-full">
        <img class="mx-auto w-full scale-150" src="./earth.png" alt="earth" />
      </div>`;
};
export default home;
