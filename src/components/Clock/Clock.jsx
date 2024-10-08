import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="analog-clock">
          <div
            className="hour-hand"
            style={{ transform: `rotate(${time.getHours() * 30 + time.getMinutes() / 2}deg)` }}
          />
          <div
            className="minute-hand"
            style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}
          />
          <div
            className="second-hand"
            style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
          />
        </div>
        <div className="digital-clock">
          <p>{time.toLocaleDateString()}</p>
          <p>{time.toLocaleTimeString()}</p>
        </div>
        <div className="punch-in">
          <button className="punch-button">Punch In</button>
          <div className="checkin-status">
            <p>Check In At: --:--</p>
            <p>Check Out At: --:--</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
