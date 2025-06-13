const getLengthString = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

getLengthString('проверка', 20);


const isPalindrom = (string) => {
  const normalize = string.toLowerCase();
  const reversed = normalize.split('').reverse().join('');
  return normalize === reversed;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');


const extractNumberFromString = (string) => {
  const normalize = string.toString();
  let result = '';

  for (let i = 0; i < normalize.length; i++) {
    const num = parseInt(normalize[i], 10);
    if (!Number.isNaN(num)) {
      result += normalize[i];
    }
  }

  return result.length === 0 ? NaN : parseInt(result, 10);
};

extractNumberFromString('ECMAScript 2022');
