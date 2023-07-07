const generateMasonry = (columns, posts) => {
  const container = document.querySelector('.works');

  container.innerHTML = '';

  // Store all column arrays which contain the relevant posts
  let columnWrappers = {};

  // Create column item array and add this to «columnWrapper» object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let column = document.createElement('div');
    column.classList.add('works__column');

    columnPosts.forEach(post => {
      let postDiv = document.createElement('div');
      postDiv.classList.add('work');

      let image = document.createElement('img');
      image.src = post.image;

      let overlay = document.createElement('div');
      overlay.classList.add('work__overlay');

      let title = document.createElement('h2');
      title.innerText = post.title;

      overlay.appendChild(title);
      postDiv.append(image, overlay);
      column.appendChild(postDiv);
    });

    container.appendChild(column);
  }

};

export default generateMasonry;
