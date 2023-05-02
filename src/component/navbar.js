const navbar = () => {
  return /*html*/ `
    <nav class=" max-w-[1920px] mx-auto px-4 py-8 relative z-10 w-full">
        <a href="#home" class="sm:hidden hover:opacity-70 w-8 h-8 ml-auto block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            class="fill-white cursor-pointer"
          >
            <path
              d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"
            ></path>
            <path
              d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"
            ></path>
            <path
              d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"
            ></path>
            <path
              d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"
            ></path>
          </svg>
        </a>
        <ul class="max-sm:hidden w-2/3 ml-auto flex justify-around capitalize">
          <li>
            <a class="px-4 hover:opacity-75 py-2" href="#home">home</a>
          </li>
          <li>
            <a class="px-4 hover:opacity-75 py-2" href="#explore"
              >explore</a
            >
          </li>
          <li>
            <a class="px-4 hover:opacity-75 py-2" href="#about"
              >about</a
            >
          </li>
          <li>
            <a class="px-4 hover:opacity-75 py-2" href="#contact"
              >contact</a
            >
          </li>
        </ul>
      </nav>
    `;
};
export default navbar;
