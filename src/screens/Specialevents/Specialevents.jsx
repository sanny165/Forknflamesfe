import React, { useState } from 'react';
import './specialevents.css';

const Specialevents = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    eventType: '',
    guests: '',
    date: '',
    time: '',
    instructions: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="specialevents-container">
      {!submitted ? (
        <form className="specialevents-form" onSubmit={handleSubmit}>
          <h2>Book Your Special Event</h2>
          <input type="text" placeholder="Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="tel" placeholder="Contact Number" required onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
          <input type="text" placeholder="Event Type (e.g. Birthday, Anniversary)" required onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} />
          <input type="number" placeholder="Number of Guests" onChange={(e) => setFormData({ ...formData, guests: e.target.value })} />
          <input type="date" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          <input type="time" onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
          <textarea placeholder="Additional Instructions" onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}></textarea>
          <button type="submit">Reserve Event</button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>Event Reserved Successfully!</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Type:</strong> {formData.eventType}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
        </div>
      )}
    </div>
  );
};

export default Specialevents;