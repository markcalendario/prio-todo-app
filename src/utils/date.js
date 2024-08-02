import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function isDateInPast(dateToCheck) {
  return dayjs().isAfter(dateToCheck, "day");
}

export function getRelativeDate(date) {
  date = dayjs(date, "YYYY-MM-DD");
  return date.from(dayjs());
}

export function getRelativeDateTimeFromUnix(unix) {
  unix = dayjs.unix(unix);
  return dayjs().to(unix);
}
