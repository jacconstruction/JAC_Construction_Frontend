import './TimelineSection.css';

const timelineData = [
  {
    id: 1,
    year: '2000',
    title: 'THE FOUNDATION',
    description: 'Thomas Jac establishes the company with a small crew of 5 master masons, focusing on high-end residential framework and custom concrete pouring.',
  },
  {
    id: 2,
    year: '2008',
    title: 'FIRST COMMERCIAL SKYLINE',
    description: 'Awarded the contract for the Horizon Trade Center. This marked our shift from residential estates to large-scale commercial structural engineering.',
  },
  {
    id: 3,
    year: '2015',
    title: 'NATIONAL EXPANSION',
    description: 'Opened three new regional offices and acquired heavy-duty crane logistics, allowing us to manage simultaneous multi-million dollar high-rise projects.',
  },
  {
    id: 4,
    year: '2026',
    title: '26 YEARS OF EXCELLENCE',
    description: 'Today, we stand as industry leaders in sustainable architecture and steel-frame skyscrapers, with over 900+ successful projects delivered.',
  }
];

const TimelineSection = () => {
  return (
    <section className="timeline-section" id="company-timeline">
      <div className="container">
        
        <div className="section-header center">
          <h4 className="subtitle">OUR JOURNEY</h4>
          <h2 className="title">BUILDING A <span className="text-accent">LEGACY</span></h2>
          <div className="title-underline center-line"></div>
        </div>

        <div className="timeline-container">
          <div className="structural-beam"></div>

          {timelineData.map((item, index) => (
            <div 
              className={`timeline-node ${index % 2 === 0 ? 'left-node' : 'right-node'}`} 
              key={item.id}
            >
              <div className="timeline-marker"></div>
              
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;
