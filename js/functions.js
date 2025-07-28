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


const isMeetingWithinWorkHours = (workStart, workEnd, meetingStart, duration) => {
  const parseTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStartMin = parseTime(workStart);
  const workEndMin = parseTime(workEnd);
  const meetingStartMin = parseTime(meetingStart);
  const meetingEndMin = meetingStartMin + duration;

  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
};

isMeetingWithinWorkHours('08:00', '17:30', '14:00', 90);
