import React from 'react';
import KolamCorners from './KolamCorners';
import './Story.css';

const Story = () => {
  return (
    <section className="story section-padding">
      <KolamCorners size={80} opacity={0.35} offset={12} />
      <div className="container">
        <h2 className="section-title">Our Journey</h2>
        <div className="story-content">
          <div className="story-image">
            <div className="photo-frame">
              <img src="/couple_photo.jpeg" alt="Our Journey" />
            </div>
          </div>
          <div className="story-text">
            <h3>With the Blessings of Our Families</h3>
            <p>
              Every beautiful journey begins with a special moment. With the love and blessings of our families, we are delighted to begin a new chapter together.
            </p>
            <p>
              We warmly invite you to join us as we celebrate our Engagement Ceremony and make this occasion even more memorable with your presence and blessings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
