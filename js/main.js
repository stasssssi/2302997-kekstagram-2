const DESCRIPTIONS = [
  'Закат на берегу океана',
  'Котик отдыхает на подоконнике',
  'Уличный музыкант в Париже',
  'Горы на рассвете',
  'Шумный вечер в центре города',
  'Уютное кафе в Тбилиси',
  'Дождливый день',
  'Смешной момент с друзьями',
  'Прогулка по лесу',
  'Чашка кофе и хорошая книга',
  'Радуга после грозы',
  'Красивая архитектура старого города',
  'Ужин на крыше',
  'Пляж и коктейль',
  'Утренняя йога на траве',
  'Котёнок играет с клубком',
  'Полет над облаками',
  'Снежный вечер у камина',
  'Рассвет в пустыне',
  'Поездка в горы',
  'Звёздное небо',
  'Цветочный рынок',
  'Круиз по Средиземному морю',
  'Уличная еда в Азии',
  'На вершине мира'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Оля', 'Катя', 'Иван', 'Настя', 'Михаил', 'Дима', 'Алиса', 'Сергей', 'Лена'];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArrayItem = arr => arr[getRandomInt(0, arr.length - 1)];

const getRandomMessage = () => {
  const count = getRandomInt(1, 2);
  const selected = new Set();
  while (selected.size < count) {
    selected.add(getRandomArrayItem(MESSAGES));
  }
  return Array.from(selected).join(' ');
};

let commentId = 1;

const generateComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomMessage(),
  name: getRandomArrayItem(NAMES)
});

const generateComments = () =>
  Array.from({ length: getRandomInt(0, 30) }, () => generateComment());

const generatePhotos = () =>
  Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: DESCRIPTIONS[i],
    likes: getRandomInt(15, 200),
    comments: generateComments()
  }));

// Генерация данных
const photoDescriptions = generatePhotos();
console.log(photoDescriptions);
