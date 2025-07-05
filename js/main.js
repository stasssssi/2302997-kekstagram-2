const IDS = [];
const URL_PICTURES = [];

for (let i = 1; i <= 25; i++) {
  IDS.push(i);
  URL_PICTURES.push(`photos/${i}.jpg`);
}

const DESCRIPTIONS = [
  'Закат',
  'Весёлый котик на подоконнике',
  'Горная тропа в тумане',
  'Чашка кофе на рассвете',
  'Цветущее поле лаванды',
  'Прогулка по осеннему парку',
  'Лучи солнца сквозь листву',
  'Уютный вечер',
  'Песчаный пляж и волны',
  'Ночное небо',
  'Уличный музыкант в старом городе',
  'Смешной щенок в коробке',
  'Горы, отражённые в озере',
  'Кусочек вкусного торта',
  'Туманное утро на озере',
  'Девушка c воздушными шарами',
  'Полет воздушного змея',
  'Пикник в цветущем саду',
  'Летний дождь и зонт',
  'Старый велосипед',
  'Пальмы на фоне заката',
  'Путь через лес',
  'Коты спят обнявшись',
  'Огни ночного города',
  'Маленький домик в деревне'
];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка сделала фото лучше.',
  'Я уронил фотоаппарат на кота, и вышло лучше.',
  'Лица перекошены. Неудачный момент.'
];

const COMMENT_NAMES = ['Артём', 'Оля', 'Иван', 'Аня', 'Дима', 'Лена', 'Настя', 'Максим', 'Катя'];

let commentID = 1;

const createComment = () => ({
  id: commentID++,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: COMMENT_MESSAGES[getRandomNumber(0, COMMENT_MESSAGES.length - 1)],
  name: COMMENT_NAMES[getRandomNumber(0, COMMENT_NAMES.length - 1)]
});

const generateComments = () => {
  const count = getRandomNumber(0, 30);
  return Array.from({ length: count }, createComment);
};

const photos = [];

for (let i = 0; i < 25; i ++) {
  const photo = {
    id: IDS[i],
    url: URL_PICTURES[i],
    description: DESCRIPTIONS[i],
    likes: getRandomNumber(15, 200),
    comments: generateComments()
  };
  photos.push(photo);
}

console.log(photos);
