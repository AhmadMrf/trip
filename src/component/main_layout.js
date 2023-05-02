import home from "./home";
import navbar from "./navbar";

const main_layout = () => {
  return /*html*/ `
  <main class="group max-w-[1920px] mx-auto relative h-screen">
      ${navbar()}
      ${home()}
    </main>
    `;
};
export default main_layout;
