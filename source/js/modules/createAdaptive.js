import createPosts from './createPosts';
import generateMasonry from "./generateMasonry";

const createAdaptive = () => {

  const posts = createPosts(0);
  let previousScreenSize = window.innerWidth;

  window.addEventListener('resize', () => {

    if (window.innerWidth < 600 && previousScreenSize >= 600) {
      generateMasonry(1, posts);
    } else if (
      window.innerWidth >= 600 &&
      window.innerWidth < 900 &&
      (previousScreenSize < 600 || previousScreenSize >= 900)) {
      generateMasonry(2, posts);
    } else if (window.innerWidth >= 900 && previousScreenSize < 900) {
      generateMasonry(5, posts);
    }
    previousScreenSize = window.innerWidth;

  })

  // Page load
  if (previousScreenSize < 600) {
    generateMasonry(1, posts);
  } else if (previousScreenSize >= 600 && previousScreenSize < 900) {
    generateMasonry(2, posts);
  } else {
    generateMasonry(5, posts);
  }

}

export default createAdaptive;
