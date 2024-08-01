import dayjs from "dayjs";

export function isDateInPast(dateToCheck) {
  return dayjs().isAfter(dateToCheck, "day");
}
