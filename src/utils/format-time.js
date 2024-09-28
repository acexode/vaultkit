import { format, getTime, parseISO, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';
  const d = new Date(date)
  return isValidDate(d) ? format(d, fm) : date;
}
export function isValidDate(datestring){
  const date = new Date(datestring)
  // eslint-disable-next-line no-restricted-globals
  return date instanceof Date && !isNaN(date)
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '';
}

export function formatDateToYYYYMMDD(date) {
  return format(date, 'yyyy-MM-dd');
}

export function formatToHumanReadable(dateString) {
  const date = parseISO(dateString); // Convert the string to a Date object
  return format(date, 'MMMM do, yyyy h:mm a');
}



export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
