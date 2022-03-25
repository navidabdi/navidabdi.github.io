const share = document.querySelector('.share');
const shareIcon = document.querySelector('.share-icon');
const articleBox = document.querySelector('.article-box');
const screenWidth = window.innerWidth;

if (screenWidth > 768) {
  shareIcon.addEventListener('click', () => {
    share.classList.toggle('active');
  });
} else {
  shareIcon.addEventListener('click', () => {
    articleBox.classList.toggle('active');
  });
}
