import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import KolamCorners from './KolamCorners';
import './WeddingDetails.css';

const EventCard = ({ title, date, time, location, description, mapLink }) => (
  <div className="event-card">
    <h3>{title}</h3>

    <div className="event-info">
      <div className="info-item">
        <Calendar size={16} />
        <span>{date}</span>
      </div>

      <div className="info-item">
        <Clock size={16} />
        <span>{time}</span>
      </div>

      <div className="info-item">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
    </div>

    <p className="description">{description}</p>

    <a
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn map-btn"
    >
      View Location
    </a>
  </div>
);

const WeddingDetails = () => {
  return (
    <section className="wedding-details section-padding" id="events">
      <KolamCorners size={80} opacity={0.35} offset={12} />

      <div className="container">
        <h2 className="section-title engagement-title">
    Engagement <br /> Ceremony
</h2>

        <div className="events-grid single-event">
          <EventCard
            title="Engagement Ceremony"
            date="23 August 2026 (Sunday)"
            time="5:00 PM Onwards"
            location="MANUSU Party Hall"
            description="With the blessings of our families, we warmly invite you to join us as we celebrate our Engagement Ceremony. Your presence and blessings will make this occasion truly memorable."
            mapLink="https://maps.app.goo.gl/k67sGtM3h12HQvM26"
          />
        </div>

        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=MANUSU%20Party%20Hall&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MANUSU Party Hall"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;