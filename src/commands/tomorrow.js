import { createReminder } from './createReminder';

aha.on("tomorrow", async ({ record, context }) => {
  await createReminder({ record, when: 'tomorrow' });
});
