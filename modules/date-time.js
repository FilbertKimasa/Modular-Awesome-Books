import { DateTime } from './luxon.js';
import UI from './ui.js';

const currentDate = () => {
  const dt = DateTime.now();
  const ui = new UI();
  const currentDateTime = dt.toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );

  ui.showDate.innerHTML = currentDateTime;
};

export { currentDate as default };
