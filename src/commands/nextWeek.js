import { createReminder } from './createReminder';

aha.on("nextWeek", async ({ record, context }) => {
  const nextWeek = new Date();

  const currentDay = nextWeek.getDay(); // Sunday 0 - Saturday 6
  console.log(`current day ${currentDay}`);

  if (currentDay === 0) { // Sunday
    nextWeek.setDate(nextWeek.getDate() + 1);
  } else { // 1 - 6
    nextWeek.setDate(nextWeek.getDate() + 8 - currentDay);
  }

  await createReminder({ record, when: nextWeek });
});
