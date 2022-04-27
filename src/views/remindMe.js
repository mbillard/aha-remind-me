import React from "react";
import { createReminder } from "../commands/createReminder";

const RemindMe = ({ record }) => {
  async function remindMe(when) {
    await createReminder({ record, when });
  }

  return (
    <>
      <aha-button onClick={() => remindMe('today')} size="small">Today</aha-button>
      {' '}
      <aha-button onClick={() => remindMe('tomorrow')} size="small">Tomorrow</aha-button>
      {' '}
      <aha-button onClick={() => remindMe('nextWeek')} size="small">Next week</aha-button>
    </>
  );
}

aha.on("remindMe", ({record, fields}, { settings }) => {
  return (
    <RemindMe record={record} />
  );
});
