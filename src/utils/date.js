import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function isDateInPast(dateToCheck) {
  return dayjs().isAfter(dayjs(dateToCheck, "YYYY-MM-DDTHH:mm"));
}

export function getRelativeDateAndTime(date) {
  date = dayjs(date, "YYYY-MM-DDTHH:mm");
  return date.from(dayjs());
}

export function getCurrentDateAndTime() {
  return dayjs().format("YYYY-MM-DDTHH:mm");
}
