export const convertToSentenceCase = (str) => {
  str = str.replace(/_/g, ' ');
  return str.toLowerCase().replace(/(^|[.!?])(\w)/g, (match, p1, p2) => p1 + p2.toUpperCase());
};

export function humanReadableTime(dateString) {
  const targetDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = (targetDate - now) / 1000;

  if (diffInSeconds < 0) {
    return 'in the past';
  }

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;

  if (diffInSeconds < secondsInMinute) {
    return 'just now';
  }
  if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} from now`;
  }
  if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hour${hours !== 1 ? 's' : ''} from now`;
  }
  const days = Math.floor(diffInSeconds / secondsInDay);
  return `${days} day${days !== 1 ? 's' : ''} from now`;
}
