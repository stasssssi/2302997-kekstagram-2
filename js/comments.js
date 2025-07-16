import { getRandomInt, getRandomArrayItem } from './utils.js';
import { MESSAGES, NAMES } from './data.js';

let commentId = 1;

const getRandomMessage = () => {
  const count = getRandomInt(1, 2);
  const selected = new Set();
  while (selected.size < count) {
    selected.add(getRandomArrayItem(MESSAGES));
  }
  return Array.from(selected).join(' ');
};

export const generateComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomMessage(),
  name: getRandomArrayItem(NAMES)
});

export const generateComments = () =>
  Array.from({ length: getRandomInt(0, 30) }, () => generateComment());
