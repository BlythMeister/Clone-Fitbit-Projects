import * as document from "document";
import { gettext } from "i18n";
//Date - START

export let dayEl = document.getElementById("day");
export let dateEl = document.getElementById("date");
export let dateFormat = "dd";
export function setDateFormat(val) { dateFormat = val}

//Date - END

export function drawDate(now) {
  let date = getDateInFormat(now);
  let dayName = gettext(`day-${now.getDay()}`);

  dayEl.text = `${dayName}`;
  dateEl.text =  `${date}`;
}

export function getDateInFormat(now){
  let day = now.getDate();
  let monthName = gettext(`month-short-${now.getMonth()}`);
  return zeroPad(day+"-"+monthName);
}

export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
