const hamburger = document.querySelector('.nav-toggle');
const navigator = document.querySelectorAll('.nav-list > a');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('onOpen');
});

navigator.forEach((links) => {
  links.addEventListener('click', () => {
    navigation.classList.remove('onOpen');
    hamburger.classList.remove('active');
  });
});

const speaker = document.querySelector('.speaker-group');

const speakersArray = [
  {
    name: 'Davido',
    img: './images/davido.jpeg',
    qualification: 'Davido is a Nigerian singer, songwriter, and record producer.',
    para: 'He has become one of the biggest Afrobeats artists in the world, winning numerous awards for his music and philanthropic endeavors.',
  },

  {
    name: 'NEO',
    img: './images/download.jpeg',
    qualification: 'an American singer, songwriter, actor, dancer, and record producer',
    para: ' He gained fame for his songwriting abilities when he penned Marios 2004 hit "Let Me Love You"',
  },

  {
    name: 'Nasty c',
    img: './images/Nasty c.jpeg',
    qualification: 'Record labels: Def Jam Recordings, Tall Racks Records, Def Jam Africa, Universal Music Africa',
    para: 'Nasty C, is a South African rapper, songwriter, and record producer. ',
  },

  {
    name: 'Yochai Benkler',
    img: './images/burna-boy.jpeg',
    qualification: 'Burna Boy is a Nigerian singer and songwriter known for his fusion of Afrobeat',
    para: 'He has won several awards, including the BET Awards for Best International Act and a Grammy Award for Best Global Music Album, and has collaborated with various international artists.',
  },
];

speakersArray.forEach((value) => {
  const speak = document.createElement('div');
  speak.className = 'speaker-card';
  speak.innerHTML = `

          <img class="speaker-img" src="${value.img}" alt="" />
          <div class="speaker-detail">
            <h3 class="speaker-name">${value.name}</h3>
            <h4 class="speaker-qualification">
            ${value.qualification}
            </h4>
            <p class="speaker-para">
            ${value.para}
            </p>
          </div>
`;

  speaker.append(speak);
});