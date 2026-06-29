import React from 'react';

const Stats: React.FC = () => {
  const statsData = [
    { number: '35,064', label: 'Hours of Support', hasPlus: true },
    { number: '2,300', label: 'Projects', hasPlus: true },
    { number: '3,000', label: 'Happy Clients', hasPlus: true },
    { number: '30', label: 'SmartMates', hasPlus: false },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-number">
                {stat.number}{stat.hasPlus && <span>+</span>}
              </div>
              <div className="stat-divider"></div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
