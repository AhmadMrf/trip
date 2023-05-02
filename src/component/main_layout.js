import home from "./home";
import navbar from "./navbar";

const main_layout = () => {
  return /*html*/ `
  <main class="group relative h-screen overflow-hidden">
      ${navbar()}
      ${home()}
    </main>
    `;
};
export default main_layout;
