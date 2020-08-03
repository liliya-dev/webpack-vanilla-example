
const mainDoc = document.querySelector('html');
const cursor = document.querySelector('.cursor');

mainDoc.addEventListener('mousemove', (event) => {
  cursor.style.left = event.pageX + 'px';
  cursor.style.top = event.pageY + 'px';
});

const contacts = document.querySelectorAll('.nav__contact');
const navImgs = document.querySelectorAll('.nav__img-wrapper');

for (const contact of contacts) {
  contact.addEventListener('mouseover', () => {
    cursor.textContent = 'contact';
    cursor.style.width = '4vw';
    cursor.style.height = '4vw';
  });

  contact.addEventListener('mouseout', () => {
    cursor.textContent = '';
    cursor.style.width = '1vw';
    cursor.style.height = '1vw';
  });
}

for (const navImg of navImgs) {
  navImg.addEventListener('mouseover', () => {
    cursor.textContent = 'open';
    cursor.style.width = '4vw';
    cursor.style.height = '4vw';
  });

  navImg.addEventListener('mouseout', () => {
    cursor.textContent = '';
    cursor.style.width = '1vw';
    cursor.style.height = '1vw';
  });
}

const links = document.querySelectorAll('li, .logo, .clients__info, .contacts, button');

for (const link of links) {
  link.addEventListener('mouseover', () => {
    cursor.style.backgroundColor = 'white';
    cursor.style.boxShadow = `10px 10px 30vw 3vw rgba(245,242,245,0.7)`;
  });

  link.addEventListener('mouseout', () => {
    cursor.style.backgroundColor = 'hsl(353, 96%, 44%)';
    cursor.style.boxShadow = `10px 10px 30vw 3vw rgba(243,81,139,0.7)`;
  });
}
