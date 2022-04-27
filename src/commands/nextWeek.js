import { createReminder } from './createReminder';

aha.on("nextWeek", async ({ record, context }) => {
  await createReminder({ record, when: 'nextWeek' });
});
