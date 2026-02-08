"use client";

import { useState, useEffect } from "react";
import { getTimeRemaining, padNumber } from "~/utils/helpers";

// Countdown timer component
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const launchDate = "January 1, 2025";

  useEffect(() => {
    setInterval(() => {
      const t = getTimeRemaining(launchDate);
      setTimeLeft({
        days: t.days,
        hours: t.hours,
        minutes: t.minutes,
        seconds: t.seconds,
      });
    }, 1000);
  }, []);

  return (
    <div className="flex gap-6">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{padNumber(item.value)}</span>
          <span className="text-sm text-gray-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
