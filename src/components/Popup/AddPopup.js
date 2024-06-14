import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Tabs, Tab, Box } from '@mui/material';
import './Popup.css';

function Popup({ trigger, setTrigger }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [members, setMembers] = useState([{ role: 'Member' }]);
  const [roles, setRoles] = useState([
    'Team Head',
    'Security Staff',
    'Shift In Charge',
    'Members',
  ]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const addMember = () => {
    setMembers([...members, { role: 'Member' }]);
  };

  const handleBackButtonClick = () => {
    setTrigger(false);
  };

  const handleNextButtonClick = () => {
    // Submit all members
    console.log('Members:', members);
    setTrigger(false);
    // Remove the selected role from the roles array
    setRoles(roles.filter((_, index) => index !== selectedTab));
  };

  useEffect(() => {
    const closePopup = (e) => {
      if (e.key === 'Escape') {
        setTrigger(false);
      }
    };
    window.addEventListener('keydown', closePopup);
    return () => window.removeEventListener('keydown', closePopup);
  }, [setTrigger]);

  const getPlaceholder = (field) => {
    const isSecurity = roles[selectedTab] === 'Security Staff';
    const placeholders = {
      name: isSecurity ? 'Security Name' : 'Emp. Name',
      code: isSecurity ? 'Security Code' : 'Emp. Code',
      designation: isSecurity ? 'Security Designation' : 'Designation',
      contact: isSecurity ? 'Security Contact No.' : 'Contact No.',
      reporting: isSecurity ? 'Security Reporting Officer' : 'Reporting Officer',
      hod: isSecurity ? 'Security HOD' : 'HOD',
    };
    return placeholders[field];
  };

  return trigger ? (
    <div className="popup-add">
      <div className="popup-inner-add">
        <div className="row">
          <div className="col-lg-12 d-flex heading-add">
            <h4>Add {roles[selectedTab]}</h4>
            <button className="close-btn" onClick={() => setTrigger(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="role tabs">
              {roles.map((role, index) => (
                <Tab key={index} label={role} />
              ))}
            </Tabs>
          </Box>
          {roles[selectedTab] === 'Members' ? (
            <>
              {members.map((member, index) => (
                <div key={index}>
                  <div className="row mt-3">
                    <div className="col">
                      <label htmlFor={`email-${index}`} className="form-label">
                        Member Email
                      </label>
                      <input
                        type="text"
                        id={`email-${index}`}
                        className="form-control"
                        placeholder="Emp@jindalsteel.com"
                        value={member.email || ''}
                        onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`name-${index}`} className="form-label">
                        Member Name
                      </label>
                      <input
                        type="text"
                        id={`name-${index}`}
                        className="form-control"
                        placeholder={getPlaceholder('name')}
                        value={member.name || ''}
                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
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
                        placeholder={getPlaceholder('code')}
                        value={member.code || ''}
                        onChange={(e) => handleMemberChange(index, 'code', e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`department-${index}`} className="form-label">
                        Department
                      </label>
                      <select
                        id={`department-${index}`}
                        className="form-select"
                        value={member.department || ''}
                        onChange={(e) => handleMemberChange(index, 'department', e.target.value)}
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
                      <label htmlFor={`designation-${index}`} className="form-label">
                        Designation
                      </label>
                      <input
                        type="text"
                        id={`designation-${index}`}
                        className="form-control"
                        placeholder={getPlaceholder('designation')}
                        value={member.designation || ''}
                        onChange={(e) => handleMemberChange(index, 'designation', e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`contact-${index}`} className="form-label">
                        Contact No.
                      </label>
                      <input
                        type="text"
                        id={`contact-${index}`}
                        className="form-control"
                        placeholder={getPlaceholder('contact')}
                        value={member.contact || ''}
                        onChange={(e) => handleMemberChange(index, 'contact', e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`reporting-${index}`} className="form-label">
                        Reporting Officer
                      </label>
                      <input
                        type="text"
                        id={`reporting-${index}`}
                        className="form-control"
                        placeholder={getPlaceholder('reporting')}
                        value={member.reporting || ''}
                        onChange={(e) => handleMemberChange(index, 'reporting', e.target.value)}
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
                        placeholder={getPlaceholder('hod')}
                        value={member.hod || ''}
                        onChange={(e) => handleMemberChange(index, 'hod', e.target.value)}
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
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-dark" style={{ width: '100px', margin: '5px' }} onClick={handleBackButtonClick}>
                  <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
                  &nbsp; Back
                </button>
                <button className="btn btn-success" style={{ width: '100px', margin: '5px' }} onClick={handleNextButtonClick}>
                  Submit
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="row mt-3">
                {roles[selectedTab] !== 'Security Staff' && (
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
                    placeholder={getPlaceholder('code')}
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
                    placeholder={getPlaceholder('name')}
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
                    placeholder={getPlaceholder('designation')}
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
                    placeholder={getPlaceholder('contact')}
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
                    placeholder={getPlaceholder('reporting')}
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
                    placeholder={getPlaceholder('hod')}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;

