import { createReminder } from './createReminder';

aha.on("today", async ({ record, context }) => {
  const today = new Date();

  await createReminder({ record, when: today });
});
