import React from 'react'

const AppointmentForm = () => {
  return (
    <>
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Make an appointment</h2>
      <p className="text-center mb-4">
      Schedule a convenient appointment with our specialists. Fill out the form below, and we'll confirm your booking shortly
      </p>
      <form>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Jhon Doe"
              style={{ marginBottom: '15px' }}
            />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@gmail.com"
              style={{ marginBottom: '15px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="+00 141 23 234"
              style={{ marginBottom: '15px' }}
            />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="date" className="form-label">Booking Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              style={{ marginBottom: '15px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="department" className="form-label">Department</label>
            <select
              className="form-control"
              id="department"
              style={{ marginBottom: '15px' }}
            >
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Oncology</option>
            </select>
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="doctor" className="form-label">Doctor</label>
            <select
              className="form-control"
              id="doctor"
              style={{ marginBottom: '15px' }}
            >
              <option>Select Doctor</option>
              <option>Dr. John Smith</option>
              <option>Dr. Jane Doe</option>
              <option>Dr. Sam Green</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Write something here..."
            style={{ marginBottom: '15px' }}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default AppointmentForm