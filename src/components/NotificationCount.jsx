import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

function NotificationCount() {
  const countDone = useContext(CounterContext);
  // const countDone =
  //   notif && Array.isArray(notif)
  //     ? notif.filter((countNotif) => countNotif.status === 'Done').length
  //     : 0;

  return <sup>{countDone > 0 ? <sup>{countDone}</sup> : ''}</sup>;
}

export default NotificationCount;
