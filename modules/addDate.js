import { DateTime } from '../node_modules/luxon/src/luxon.js';
export 
const displayDateTime = () => {
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS,);
  const printDate = document.querySelector('.date');
  printDate.innerHTML = time; // Tue, 12 May 2020 23:50:21 GMT
}
