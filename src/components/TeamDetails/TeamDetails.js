import React, { useEffect, useRef } from 'react'
import './teamdetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const TeamDetails = ({ trigger, setTrigger }) => {
  const popupRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setTrigger(false)
      }
    }

    if (trigger) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [trigger, setTrigger])

  return trigger ? (
    <div className="popup-list">
      <div className="popup-inner-list" ref={popupRef}>
        <div className="row">
          <div className="col-lg-12 d-flex heading-list">
            <h4>Team Member List</h4>
            <button className="close-btn" onClick={() => setTrigger(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="row hovers">
          <div
            className="d-flex mt-2 p-2"
            style={{
              borderBottom: '1px solid grey',
              borderTop: '1px solid grey',
            }}
          >
            <div className="col-sm-6">1</div>
            <div className="col">Anuj Singh</div>
          </div>
        </div>
        <div className="row hovers">
          <div
            className="d-flex mt-2 p-2"
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className="col-sm-6">2</div>
            <div className="col">Rajesh Sharma</div>
          </div>
        </div>
        <div className="row hovers">
          <div
            className="d-flex mt-2 p-2"
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className="col-sm-6">3</div>
            <div className="col">Mohit Mittal</div>
          </div>
        </div>
        <div className="row hovers">
          <div
            className="d-flex mt-2 p-2"
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className="col-sm-6">4</div>
            <div className="col">Ashish Kumar</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default TeamDetails
