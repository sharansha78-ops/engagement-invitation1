import React, { useEffect, useState } from 'react';
import './RemainingDays.css';

const RemainingDays = () => {
  const [days, setDays] = useState(0);
  const [fillPercentage, setFillPercentage] = useState(100);

  useEffect(() => {
    // Engagement Date
    const targetDate = new Date('2026-08-23T17:00:00').getTime();

    // Countdown starts from today
    const startDate = new Date().getTime();
    const today = new Date().getTime();

    // Remaining Days
    const diffTime = targetDate - today;
    const diffDays = Math.max(
      0,
      Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    );

    setDays(diffDays);

    // Heart Fill Animation
    const totalDuration = targetDate - startDate;
    const passedDuration = today - startDate;

    let percentage = 0;

    if (totalDuration > 0) {
      percentage = (passedDuration / totalDuration) * 100;
    }

    percentage = Math.min(Math.max(percentage, 0), 100);

    setFillPercentage(100 - percentage);
  }, []);

  return (
    <div className="remaining-days-container">
      <div
        className="heart-progress"
        style={{ '--fill-amount': `${fillPercentage}%` }}
      >
        <svg viewBox="0 0 24 24" className="heart-outline-svg">
          <path
            className="heart-outline"
            pathLength="100"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>

        <svg viewBox="0 0 24 24" className="heart-fill-svg">
          <path
            className="heart-fill"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>

        <div className="days-number">{days}</div>
      </div>

      <div className="days-label">
        {days > 0
          ? `${days} Days Until Our Engagement`
          : 'Today is Our Engagement! 💍'}
      </div>
    </div>
  );
};

export default RemainingDays;