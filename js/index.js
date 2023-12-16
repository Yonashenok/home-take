const nav = document.querySelector('.nav');
const headerLogo = document.querySelector('.logo');
const header = document.querySelector('.header');
const navLinkColor = document.querySelectorAll('.color-text');
const listContainer = document.querySelector('.list-container');
const listEle = document.querySelectorAll('.list-unstyled');
const listLink = document.querySelectorAll('.list-link');
const imgContent = document.querySelectorAll('.schedule');

const navBackgroundColorHandler = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('bg-light');
    headerLogo.classList.remove('d-none');
    navLinkColor.forEach((link) => link.classList.add('text-dark'));
    navLinkColor.forEach((link) => link.classList.remove('text-light'));
  } else {
    nav.classList.remove('bg-light');
    headerLogo.classList.add('d-none');

    navLinkColor.forEach((link) => link.classList.add('text-light'));
    navLinkColor.forEach((link) => link.classList.remove('text-dark'));
  }
};

const headerObserver = new IntersectionObserver(navBackgroundColorHandler, {
  root: null,
  threshold: 0,
  rootMargin: '10px',
});
headerObserver.observe(header);

// Tapped operation with the button
listContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target.closest('.list-link');

  if (!clicked) return;

  // remove active class
  listEle.forEach((list) => list.classList.remove('list-bg'));
  listLink.forEach((link) => link.classList.remove('link-color-active'));
  imgContent.forEach((img) => img.classList.add('d-none'));

  // add active classes
  clicked.classList.add('link-color-active');
  document
    .querySelector(`.operations__link--${clicked.dataset.tab}`)
    .classList.add('list-bg');
  document
    .querySelector(`.schedule-${clicked.dataset.tab}`)
    .classList.remove('d-none');
});
