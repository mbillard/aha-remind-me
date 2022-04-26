import React from "react";

const RemindMe = ({ record }) => {
  async function remindMe() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const newTask = new aha.models["Task"]();
    newTask.record = record;
    newTask.name = "Reminder";
    newTask.body = 'Created by the "Remind me" extension'

    newTask.dueDate = tomorrow.toISOString();
    newTask.assignUser(aha.user.id);

    await newTask.save();
  }

  return (
    <aha-button onClick={remindMe} size="small">Remind me…</aha-button>
  );
}

aha.on("remindMe", ({record, fields}, { settings }) => {
  return (
    <RemindMe record={record} />
  );
});
