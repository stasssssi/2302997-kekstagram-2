import { generatePhotos } from './photos.js';
import { getLengthString, isPalindrom, extractNumberFromString } from './functions.js';


const photoDescriptions = generatePhotos();
console.log(photoDescriptions);


console.log(getLengthString('проверка', 20));
console.log(isPalindrom('топот'));
console.log(extractNumberFromString('ECMAScript 2022'));
