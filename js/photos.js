import { getRandomInt } from './utils.js';
import { DESCRIPTIONS } from './data.js';
import { generateComments } from './comments.js';

export const generatePhotos = () =>
  Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: DESCRIPTIONS[i],
    likes: getRandomInt(15, 200),
    comments: generateComments(),
  }));
