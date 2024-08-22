import { format, getTime, parseISO, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
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
