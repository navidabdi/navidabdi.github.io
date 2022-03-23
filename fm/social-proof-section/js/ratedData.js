const ratedData = [
  {
    id: 1,
    starNum: 5,
    text: 'Rated 5 Stars in Reviews',
  },
  {
    id: 2,
    starNum: 5,
    text: 'Rated 5 Stars in Report Guru',
  },
  {
    id: 3,
    starNum: 5,
    text: 'Rated 5 Stars in BestTech',
  },
];

const commentsData = [
  {
    id: 1,
    name: 'Colton Smith',
    type: 'Verified Buyer',
    comment: `"We needed the same printed design as the one
      we had ordered a week prior. Not only did they find the original order,
      but we also received it in time. Excellent!"`,
    avatar: './images/image-colton.jpg',
  },
  {
    id: 2,
    name: 'Irene Roberts',
    type: 'Verified Buyer',
    comment: `"Customer service is always excellent and very quick turn around.
      Completely delighted with the simplicity of the purchase and the speed of
      delivery."`,
    avatar: './images/image-irene.jpg',
  },
  {
    id: 3,
    name: 'Anne Wallace',
    type: 'Verified Buyer',
    comment: `"Put an order with this company and
      can only praise them for the very high standard. Will definitely use them
      again and recommend them to everyone!"`,
    avatar: './images/image-anne.jpg',
  },
];

const starNumber = (starN) => {
  let res = '';
  for (let i = 1; i <= starN; i++) {
    res += '<img src="./images/icon-star.svg" alt="" />';
  }
  return res;
};
