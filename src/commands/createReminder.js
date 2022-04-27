export async function createReminder({ record, when }) {
  let dueDate = new Date(); // today
  switch (when) {
    case 'tomorrow':
      dueDate.setDate(dueDate.getDate() + 1);
      break;
    case 'nextWeek':
      const currentDay = dueDate.getDay(); // Sunday 0 - Saturday 6

      if (currentDay === 0) { // Sunday
        dueDate.setDate(dueDate.getDate() + 1);
      } else { // 1 - 6
        dueDate.setDate(dueDate.getDate() + 8 - currentDay);
      }

      break;
  }

  const newTask = new aha.models["Task"]();
  newTask.record = record;
  newTask.name = `Reminder for "${record.name || record.referenceNum || ''}"`;
  newTask.body = 'Created by the "Remind me" extension'

  newTask.dueDate = dueDate.toISOString();
  newTask.assignUser(aha.user.id);

  await newTask.save();
}
