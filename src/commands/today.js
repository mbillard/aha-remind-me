import { createReminder } from './createReminder';

aha.on("today", async ({ record, context }) => {
  await createReminder({ record, when: 'today' });
});
