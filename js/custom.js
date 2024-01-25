// Clone Menu and Info Elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// Mobile Menu Toggle Function
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; // 요소가 펼쳐졌을 때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = 0;
  }
});

// Fixed Header Style Change and meet section start animation When Scrolling Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; // 화면 최상단이 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);

// Features Section Data
const features = [
  {
    image: '/soaply_kdt_02/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '레히히어 앵밀이간는다, 하륵러긶어서, 시나레다 촌안워응을 난엇수잘를링으핑이 호게개. 저다 아타몰린기잘을 거조에서 티결이히면',
  },
  {
    image: '/soaply_kdt_02/images/about-icon-2.svg',
    title: '100% Organic',
    text: '익골예 앙다짠득루는 으사다 욕기가. 온옷이 극햄다 자릐위지 폄게랑은 더왕의, 쇄오로 앙소으초근에요 다여고 손뻬에서 미자갠을',
  },
  {
    image: '/soaply_kdt_02/images/about-icon-3.svg',
    title: 'Cuelty Free',
    text: '쒀엙도으애다 그둰을 기긍자알죠를 쳉걱는다, 몽익꼔온은 하치소다 가즈허동다 미른시예는 거곂다. 엔어콧나부까지 즈된단에',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
    <div class="feature">
      <div class="feature-icon">
        <img src="${feature.image}" alt="" />
      </div>
      <h4>${feature.title}</h4>
      <p>${feature.text}</p>
    </div>
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, // 반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
