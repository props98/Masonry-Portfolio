import generateMasonry from "./generateMasonry";

const createAdaptive = () => {
  let previousScreenSize = window.innerWidth;
  let imageIndex = 0;

  window.addEventListener('resize', () => {

    if (window.innerWidth < 600 && previousScreenSize >= 600) {
      generateMasonry(1, posts);
      console.log(posts);
    }

  })

  generateMasonry(4, posts);
}
export default createAdaptive;
