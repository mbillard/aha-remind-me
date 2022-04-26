import { createReminder } from './createReminder';

aha.on("tomorrow", async ({ record, context }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  await createReminder({ record, when: tomorrow });
});
