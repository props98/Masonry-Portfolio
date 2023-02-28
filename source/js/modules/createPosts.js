const createPosts = (imageIndex) => {
  const posts = [];
  const images = [
    'https://dr.savee-cdn.com/image-fallbacks/original/6/0/3817da85da6011d237c0f0.gif',
    'https://dr.savee-cdn.com/things/6/3/f64ac043fd5fe44ecbcd10.webp',
    'https://dr.savee-cdn.com/things/6/3/f633587256b9a218793cef.webp',
    'https://dr.savee-cdn.com/things/6/3/f7c2c1eef2da0ea17bed48.webp',
    'https://dr.savee-cdn.com/things/6/3/f64b84e59c88084e2a9ead.webp',
    'https://dr.savee-cdn.com/things/6/3/efb2fa2902b8925918b8b6.png',
    'https://dr.savee-cdn.com/things/6/3/ee39c4799ec9392dacae0d.webp',
    'https://dr.savee-cdn.com/things/6/3/e93845c718cf107f8f1700.webp',
    'https://dr.savee-cdn.com/things/6/3/e0f8c614ac00198aecbfec.webp',
    'https://dr.savee-cdn.com/things/6/3/dd1da37a5b2bf7365b5e75.webp'
  ];

  for (let i = 1; i <= 20; i++) {
    let item = {
      id: i,
      title: `Post ${i}`,
      image: images[imageIndex],
    }

    posts.push(item);
    imageIndex++;

    if (imageIndex > images.length - 1) {
      imageIndex = 0;
    }
  }

  return posts;
};

export default createPosts;
