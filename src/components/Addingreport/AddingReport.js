import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faTimes,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import './addreport.css'

function AddReport(props) {
  const [imageCards, setImageCards] = useState([{ id: 1, image: null }])

  const handleBackButtonClick = () => {
    props.setTrigger(false)
  }

  useEffect(() => {
    const closePopup = (e) => {
      if (e.key === 'Escape') {
        props.setTrigger(false)
      }
    }
    window.addEventListener('keydown', closePopup)
    return () => window.removeEventListener('keydown', closePopup)
  }, [props])

  const handleImageUpload = (event, id) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImageCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, image: imageUrl } : card
        )
      )
    }
  }

  const handleAddImageCard = () => {
    setImageCards((prevCards) => [
      ...prevCards,
      { id: prevCards.length + 1, image: null },
    ])
  }

  const handleRemoveImageCard = (id) => {
    setImageCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }

  return props.trigger ? (
    <div className="popup-view">
      <div className="popup-inner-report1">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between align-items-center heading-view">
            <h4>Add/Edit Report</h4>
            <button
              className="close-btn"
              onClick={() => {
                props.setTrigger(false)
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col justify-content-start">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <select id="location" className="form-select">
              <option>Select Location</option>
              <option>Angul</option>
              <option>Raigarh</option>
              <option>Patratu</option>
            </select>
          </div>
          <div className="col justify-content-start">
            <label htmlFor="employeeName" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              id="employeeName"
              className="form-control"
              placeholder="Emp. Name"
            />
          </div>
          <div className="col justify-content-start">
            <label htmlFor="employeeId" className="form-label">
              Employee ID
            </label>
            <input
              type="text"
              id="employeeId"
              className="form-control"
              placeholder="Emp.ID"
            />
          </div>
          <div className="col">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              className="form-control"
              placeholder="Designation"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col justify-content-start">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select id="department" className="form-select">
              <option>Select Department</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="contactNo" className="form-label">
              Contact No.
            </label>
            <input
              type="text"
              id="contactNo"
              className="form-control"
              placeholder="Contact No."
            />
          </div>
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col">
            <label htmlFor="reportingOfficer" className="form-label">
              Reporting Officer
            </label>
            <input
              type="text"
              id="reportingOfficer"
              className="form-control"
              placeholder="Reporting Officer"
            />
          </div>
          <div className="col">
            <label htmlFor="scheduleTime" className="form-label">
              Schedule Time
            </label>
            <input type="time" id="scheduleTime" className="form-control" />
          </div>
        </div>
        <div className="row mt-3" style={{ backgroundColor: '#93ccf1' }}>
          <h3 className="text-center text-white pb-3">Upload the Photograph</h3>
          {imageCards.map((card) => (
            <div className="col-3 p-2" key={card.id}>
              <div
                className="card p-2"
                style={{ height: '250px', width: '250px', margin: '10px auto' }}
              >
                <div className="card-body p-0 d-flex flex-column">
                  <div
                    className="imagePreview"
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      padding: '10px auto',
                      flex: 1,
                    }}
                  ></div>
                  <div className="d-flex justify-content-between mt-2 p-2">
                    <label
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, marginRight: '5px' }}
                    >
                      Upload
                      <input
                        type="file"
                        className="uploadFile img"
                        style={{
                          width: '0px',
                          height: '0px',
                          overflow: 'hidden',
                        }}
                        onChange={(e) => handleImageUpload(e, card.id)}
                      />
                    </label>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveImageCard(card.id)}
                      style={{ flex: 1 }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-3 d-flex align-items-center justify-content-center">
            <button
              className="btn btn-primary"
              onClick={handleAddImageCard}
              style={{ height: '40px', margin: '30px' }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div
          className="d-flex mt-3 justify-content-end"
          style={{ borderTop: '1px solid grey' }}
        >
          <button
            className="btn btn-success"
            style={{ width: '100px', marginTop: '10px' }}
          >
            Submit
          </button>
          <button
            className="btn btn-dark"
            style={{
              width: '100px',
              marginLeft: '15px',
              marginTop: '10px',
            }}
            onClick={handleBackButtonClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
            &nbsp; Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default AddReport
