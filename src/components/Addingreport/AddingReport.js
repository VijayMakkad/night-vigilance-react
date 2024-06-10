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
                // props.closeParent()
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
        </div>
        <div className="row mt-3" style={{ backgroundColor: '#93ccf1' }}>
          <h3 className="text-center text-white pb-3">Upload the Photograph</h3>
          {imageCards.map((card) => (
            <div className="col-sm-4 p-0" key={card.id}>
              <div className="card" style={{ height: '250px' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 imgUp">
                      <div
                        className="imagePreview"
                        style={{
                          backgroundImage: `url(${card.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      ></div>
                      <label className="btn btn-primary col-sm-5 " style={{marginRight:'45px'}}>
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
                        className="btn btn-danger col-sm-5"
                        onClick={() => handleRemoveImageCard(card.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-sm-4 d-flex align-items-center justify-content-center">
            <button
              className="btn btn-primary"
              onClick={handleAddImageCard}
              style={{ height: '40px', margin:'30px' }}
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
