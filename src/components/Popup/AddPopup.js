import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Popup.css';
import { faArrowLeft, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

function Popup({ trigger, setTrigger }) {
  const [selectedRole, setSelectedRole] = useState('Team Head')
  const [members, setMembers] = useState([{ role: 'Member' }])
  const [roles, setRoles] = useState([
    'Team Head',
    'Security Staff',
    'Shift In Charge',
    'Members',
  ])

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value)
    if (event.target.value !== 'Members') {
      setMembers([{ role: event.target.value }])
    }
  }

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...members]
    newMembers[index][field] = value
    setMembers(newMembers)
  }

  const addMember = () => {
    setMembers([...members, { role: 'Member' }])
  }

  const handleBackButtonClick = () => {
    setTrigger(false)
  }

  const handleNextButtonClick = () => {
    // Submit all members
    console.log('Members:', members)
    setTrigger(false)
    // Remove the selected role from the roles array
    setRoles(roles.filter((role) => role !== selectedRole))
  }

  useEffect(() => {
    const closePopup = (e) => {
      if (e.key === 'Escape') {
        setTrigger(false)
      }
    }
    window.addEventListener('keydown', closePopup)
    return () => window.removeEventListener('keydown', closePopup)
  }, [setTrigger])

  return trigger ? (
    <div className="popup-add">
      <div className="popup-inner-add">
        <div className="row">
          <div className="col-lg-12 d-flex heading-add">
            <h4>Add {selectedRole}</h4>
            <button
              className="close-btn"
              onClick={() => {
                setTrigger(false)
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="role-select" className="form-label">
                Select Role
              </label>
              <select
                id="role-select"
                className="form-select"
                value={selectedRole}
                onChange={handleRoleChange}
              >
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {selectedRole === 'Members' ? (
            <>
              {members.map((member, index) => (
                <div key={index}>
                  <div className="row mt-3">
                    {member.role !== 'Security Staff' && (
                      <div className="col">
                        <label
                          htmlFor={`email-${index}`}
                          className="form-label"
                        >
                          Member Email
                        </label>
                        <input
                          type="text"
                          id={`email-${index}`}
                          className="form-control"
                          placeholder="Emp@jindalsteel.com"
                          value={member.email || ''}
                          onChange={(e) =>
                            handleMemberChange(index, 'email', e.target.value)
                          }
                        />
                      </div>
                    )}
                    <div className="col">
                      <label htmlFor={`name-${index}`} className="form-label">
                        Member Name
                      </label>
                      <input
                        type="text"
                        id={`name-${index}`}
                        className="form-control"
                        placeholder="Emp. Name"
                        value={member.name || ''}
                        onChange={(e) =>
                          handleMemberChange(index, 'name', e.target.value)
                        }
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`code-${index}`} className="form-label">
                        Member Code
                      </label>
                      <input
                        type="text"
                        id={`code-${index}`}
                        className="form-control"
                        placeholder="Emp. Code"
                        value={member.code || ''}
                        onChange={(e) =>
                          handleMemberChange(index, 'code', e.target.value)
                        }
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor={`department-${index}`}
                        className="form-label"
                      >
                        Department
                      </label>
                      <select
                        id={`department-${index}`}
                        className="form-select"
                        value={member.department || ''}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            'department',
                            e.target.value
                          )
                        }
                      >
                        <option>Select Department</option>
                        <option>IT</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <label
                        htmlFor={`designation-${index}`}
                        className="form-label"
                      >
                        Designation
                      </label>
                      <input
                        type="text"
                        id={`designation-${index}`}
                        className="form-control"
                        placeholder="Designation"
                        value={member.designation || ''}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            'designation',
                            e.target.value
                          )
                        }
                      />  
                    </div>
                    <div className="col">
                      <label
                        htmlFor={`contact-${index}`}
                        className="form-label"
                      >
                        Contact No.
                      </label>
                      <input
                        type="text"
                        id={`contact-${index}`}
                        className="form-control"
                        placeholder="Contact No."
                        value={member.contact || ''}
                        onChange={(e) =>
                          handleMemberChange(index, 'contact', e.target.value)
                        }
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor={`reporting-${index}`}
                        className="form-label"
                      >
                        Reporting Officer
                      </label>
                      <input
                        type="text"
                        id={`reporting-${index}`}
                        className="form-control"
                        placeholder="Reporting Officer"
                        value={member.reporting || ''}
                        onChange={(e) =>
                          handleMemberChange(index, 'reporting', e.target.value)
                        }
                      />
                    </div>
                    <div className="col mb-5">
                      <label htmlFor={`hod-${index}`} className="form-label">
                        HOD
                      </label>
                      <input
                        type="text"
                        id={`hod-${index}`}
                        className="form-control"
                        placeholder="HOD"
                        value={member.hod || ''}
                        onChange={(e) =>
                          handleMemberChange(index, 'hod', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-start">
                <button className="btn btn-primary" onClick={addMember}>
                  <FontAwesomeIcon icon={faPlus} /> Add Member
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="row mt-3">
                {selectedRole !== 'Security Staff' && (
                  <div className="col">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Emp@jindalsteel.com"
                    />
                  </div>
                )}
                <div className="col">
                  <label htmlFor="code" className="form-label">
                    Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    className="form-control"
                    placeholder="Emp. Code"
                  />
                </div>
                <div className="col">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Emp. Name"
                  />
                </div>
                <div className="col">
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
              </div>
              <div className="row mt-3">
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
                <div className="col">
                  <label htmlFor="contact" className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="form-control"
                    placeholder="Contact No."
                  />
                </div>
                <div className="col">
                  <label htmlFor="reporting" className="form-label">
                    Reporting Officer
                  </label>
                  <input
                    type="text"
                    id="reporting"
                    className="form-control"
                    placeholder="Reporting Officer"
                  />
                </div>
                <div className="col mb-5">
                  <label htmlFor="hod" className="form-label">
                    HOD
                  </label>
                  <input
                    type="text"
                    id="hod"
                    className="form-control"
                    placeholder="HOD"
                  />
                </div>
              </div>
            </>
          )}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-dark"
              style={{ width: '100px', margin: '5px' }}
              onClick={handleBackButtonClick}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: '#ffffff' }}
              />
              &nbsp; Back
            </button>
            <button
              className="btn btn-success"
              style={{ width: '100px', margin: '5px' }}
              onClick={handleNextButtonClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
