const blogList = document.getElementById('blog-list');

const blogData = [
  {
    image: './assets/images/blog-1.jpg',
    title: 'Opening of new offices of the company',
    badge: 'Company',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-2.jpg',
    title: 'What cars are most vulnerable',
    badge: 'Repair',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-3.jpg',
    title: 'Statistics showed which average age',
    badge: 'Cars',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-4.jpg',
    title: 'What´s required when renting a car?',
    badge: 'Cars',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-5.jpg',
    title: 'New rules for handling our cars',
    badge: 'Company',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-1.jpg',
    title: 'Opening of new offices of the company',
    badge: 'Company',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-2.jpg',
    title: 'What cars are most vulnerable',
    badge: 'Repair',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-3.jpg',
    title: 'Statistics showed which average age',
    badge: 'Cars',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-4.jpg',
    title: 'What´s required when renting a car?',
    badge: 'Cars',
    date: 'January 14, 2022',
    comments: 114
  },
  {
    image: './assets/images/blog-5.jpg',
    title: 'New rules for handling our cars',
    badge: 'Company',
    date: 'January 14, 2022',
    comments: 114
  },
];

blogData.forEach(blog => {
  const listItem = document.createElement('li');
  const cardElement = document.createElement('div');
  const cardBanner = document.createElement('figure');
  const imageLink = document.createElement('a');
  const image = document.createElement('img');
  const badgeLink = document.createElement('a');
  const cardContent = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const titleLink = document.createElement('a');
  const cardMeta = document.createElement('div');
  const publishDate = document.createElement('div');
  const dateIcon = document.createElement('ion-icon');
  const dateElement = document.createElement('time');
  const commentsSection = document.createElement('div');
  const commentsIcon = document.createElement('ion-icon');
  const commentsCount = document.createElement('data');

  cardElement.classList.add('blog-card');
  cardBanner.classList.add('card-banner');
  imageLink.href = '#'; // Replace with actual link if needed
  image.src = blog.image;
  image.alt = blog.title;
  image.loading = 'lazy';
  image.classList.add('w-100');
  badgeLink.href = '#'; // Replace with actual link if needed
  badgeLink.classList.add('btn', 'card-badge');
  badgeLink.textContent = blog.badge;
  cardContent.classList.add('card-content');
  cardTitle.classList.add('h3', 'card-title');
  titleLink.href = '#'; // Replace with actual link if needed
  titleLink.textContent = blog.title;
  cardMeta.classList.add('card-meta');
  publishDate.classList.add('publish-date');
  dateIcon.setAttribute('name', 'time-outline');
  dateElement.setAttribute('datetime', blog.date);
  dateElement.textContent = blog.date;
  commentsSection.classList.add('comments');
  commentsIcon.setAttribute('name', 'chatbubble-ellipses-outline');
  commentsCount.textContent = blog.comments;

  imageLink.appendChild(image);
  cardBanner.appendChild(imageLink);
  cardBanner.appendChild(badgeLink);
  titleLink.appendChild(cardTitle);
  cardContent.appendChild(titleLink);
  publishDate.appendChild(dateIcon);
  publishDate.appendChild(dateElement);
  commentsSection.appendChild(commentsIcon);
  commentsSection.appendChild(commentsCount);
  cardMeta.appendChild(publishDate);
  cardMeta.appendChild(commentsSection);
  cardContent.appendChild(cardMeta);
  cardElement.appendChild(cardBanner);
  cardElement.appendChild(cardContent);
  listItem.appendChild(cardElement);
  blogList.appendChild(listItem);
});