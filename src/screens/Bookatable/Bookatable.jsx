import React, { useState } from "react";
import "./Bookatable.css";

const branches = [
  { id: 1, name: "Downtown Branch", location: "MG Road, Bangalore" },
  { id: 2, name: "Uptown Branch", location: "Indiranagar, Bangalore" },
  { id: 3, name: "Lakeside Branch", location: "Ulsoor Lake, Bangalore" },
];

const BookTable = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    seats: 1,
    date: "",
    time: "",
    seating: "",
    instructions: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="bookatable-container">
      {!selectedBranch ? (
        <div className="branch-list">
          <h2>Select a Branch</h2>
          {branches.map((branch) => (
            <div
              key={branch.id}
              className={`branch-card branch-${branch.id}`}
              onClick={() => setSelectedBranch(branch)}
            >
              <h3>{branch.name}</h3>
              <p>{branch.location}</p>
            </div>
          ))}
        </div>
      ) : !confirmed ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Book at {selectedBranch.name}</h2>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            required
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Seats"
            min="1"
            onChange={(e) =>
              setFormData({ ...formData, seats: e.target.value })
            }
          />
          <input
            type="date"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            type="time"
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="seating"
                value="Indoor"
                onChange={(e) =>
                  setFormData({ ...formData, seating: e.target.value })
                }
              />{" "}
              Indoor
            </label>
            <label>
              <input
                type="radio"
                name="seating"
                value="Outdoor"
                onChange={(e) =>
                  setFormData({ ...formData, seating: e.target.value })
                }
              />{" "}
              Outdoor
            </label>
            <label>
              <input
                type="radio"
                name="seating"
                value="Window-side"
                onChange={(e) =>
                  setFormData({ ...formData, seating: e.target.value })
                }
              />{" "}
              Window-side
            </label>
          </div>
          <textarea
            placeholder="Additional Instructions"
            onChange={(e) =>
              setFormData({ ...formData, instructions: e.target.value })
            }
          ></textarea>
          <button type="submit">Book Now</button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>Table Booked Successfully!</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Branch:</strong> {selectedBranch.name}
          </p>
          <p>
            <strong>Seats:</strong> {formData.seats}
          </p>
          <p>
            <strong>Date:</strong> {formData.date}
          </p>
          <p>
            <strong>Time:</strong> {formData.time}
          </p>
          <p>
            <strong>Seating:</strong> {formData.seating}
          </p>
          <p>
            <strong>Instructions:</strong> {formData.instructions}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookTable;
