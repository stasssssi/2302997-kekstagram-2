function getLengthString (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}
getLengthString('проверка', 20);


function isPalindrom (string) {
  const normalize = string.toLowerCase();
  let newString = '';

  for (let i = normalize.length - 1; i >= 0; i --) {
    newString += normalize[i];
  }
  if (normalize === newString) {
    return true;
  }
  return false;
}
isPalindrom('тот');

