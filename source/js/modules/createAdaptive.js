import createPosts from './createPosts';
import generateMasonry from "./generateMasonry";

const createAdaptive = () => {

  let doubleColumns = 900,
      oneColumns = 600;


  const posts = createPosts(0);
  let previousScreenSize = window.innerWidth;

  window.addEventListener('resize', () => {

    if (window.innerWidth < oneColumns && previousScreenSize >= oneColumns) {
      generateMasonry(1, posts);
    } else if (
      window.innerWidth >= oneColumns &&
      window.innerWidth < doubleColumns &&
      (previousScreenSize < oneColumns || previousScreenSize >= doubleColumns)) {
      generateMasonry(2, posts);
    } else if (window.innerWidth >= doubleColumns && previousScreenSize < doubleColumns) {
      generateMasonry(5, posts);
    }
    previousScreenSize = window.innerWidth;

  })

  // Page load
  if (previousScreenSize < oneColumns) {
    generateMasonry(1, posts);
  } else if (previousScreenSize >= oneColumns && previousScreenSize < doubleColumns) {
    generateMasonry(2, posts);
  } else {
    generateMasonry(5, posts);
  }

}

export default createAdaptive;
