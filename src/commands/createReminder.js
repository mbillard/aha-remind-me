export async function createReminder({ record, when }) {
  const newTask = new aha.models["Task"]();
  newTask.record = record;
  newTask.name = `Reminder for "${record.name}"`;
  newTask.body = 'Created by the "Remind me" extension'

  newTask.dueDate = when.toISOString();
  newTask.assignUser(aha.user.id);

  await newTask.save();
}
