const startList = document.getElementById('start-list');

const cardData = [
  {

    image: 'https://imgs.search.brave.com/vjLifBQ3zmd2wLE7PdobfiZpyt0VN0z-js0mefQAYVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzljL05hemlfU3dh/c3Rpa2Euc3Zn',

    title: 'Create a profile',

    text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure.'

  },

  {

    image: 'https://imgs.search.brave.com/vjLifBQ3zmd2wLE7PdobfiZpyt0VN0z-js0mefQAYVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzljL05hemlfU3dh/c3Rpa2Euc3Zn',


    title: 'Tell us what car you want',

    text: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'

  },

  {

    image: 'https://imgs.search.brave.com/vjLifBQ3zmd2wLE7PdobfiZpyt0VN0z-js0mefQAYVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzljL05hemlfU3dh/c3Rpa2Euc3Zn',


    title: 'Match with seller',

    text: 'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.'

  },

  {

    image: 'https://imgs.search.brave.com/vjLifBQ3zmd2wLE7PdobfiZpyt0VN0z-js0mefQAYVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzljL05hemlfU3dh/c3Rpa2Euc3Zn',


    title: 'Make a deal',

    text: 'There are many variations of passages of Lorem available, but the majority have suffered alteration.'

  }
];

cardData.forEach((card, index) => {
  const listItem = document.createElement('li');
  const cardElement = document.createElement('div');
  const cardIcon = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h3');
  const cardText = document.createElement('p');
  const cardLink = document.createElement('a');

  cardElement.classList.add('get-start-card');
  cardIcon.classList.add('card-icon', `icon-${index + 1}`);
  cardImage.src = card.image;
  cardImage.alt = card.title; // Add an alt attribute for accessibility
  cardTitle.classList.add('card-title');
  cardText.classList.add('card-text');
  cardLink.classList.add('card-link');
  cardLink.href = '#'; // Replace with actual link if needed

  cardIcon.appendChild(cardImage);
  cardTitle.textContent = card.title;
  cardText.textContent = card.text;
  cardLink.textContent = 'Get started';

cardImage.style.width = '100%';
cardImage.style.height = '100%';
cardImage.style.borderRadius = '20px';

  cardElement.appendChild(cardIcon);
  cardElement.appendChild(cardTitle);
  cardElement.appendChild(cardText);
  cardElement.appendChild(cardLink);

  listItem.appendChild(cardElement);
  startList.appendChild(listItem);
});