import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faPencil,
  faEye,
  faXmark,
  faTrash,
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMemberForm from "../components/AddMemberFrom/AddMemberForm";
import "./dashboard.css";
import TeamView from "../components/TeamViewDashboard/TeamViewDashboard";
import TeamDetails from "../components/TeamDetails/TeamDetails";
// import ReportPopup from "../ReportPopup/ReportPopup";

const data = [
  {
    id: 1,
    location: "Angul",
    teamHead: "Arjun Patil",
    shiftInCharge: "Amit Singh",
    securityStaff: "Suraj Das",
    scheduleDate: "12-04-2023",
    scheduleTime: "18:30 pm",
  },
  {
    id: 2,
    location: "Raigarh",
    teamHead: "Arjun Patil",
    shiftInCharge: "Amit Singh",
    securityStaff: "Suraj Das",
    scheduleDate: "12-04-2023",
    scheduleTime: "18:30 pm",
  },
  {
    id: 3,
    location: "Patratu",
    teamHead: "Arjun Patil",
    shiftInCharge: "Amit Singh",
    securityStaff: "Suraj Das",
    scheduleDate: "12-04-2023",
    scheduleTime: "18:30 pm",
  },
];

const UserReport = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [teamPopupVisible, setTeamPopupVisible] = useState(false);
  const [viewMemberVisible, setViewMemberVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [reportPopupVisible, setReportPopupVisible] = useState(false);

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const filteredData = data.filter(
    (item) =>
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.teamHead.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shiftInCharge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.securityStaff.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scheduleDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scheduleTime.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? faSortUp : faSortDown;
    }
    return faSort;
  };

  const handleViewMemberClick = (member) => {
    setSelectedMember(member);
    setViewMemberVisible(true);
  };

  const handleTeamPopup = () => {
    console.log("Opening Team Popup");
    setTeamPopupVisible(true);
  };

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="row upper-component">
            <div className="col-lg-12 d-flex flex-wrap">
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>Select Department</option>
                  <option>IT</option>
                  <option>Finance</option>
                  <option>IT</option>
                </select>
              </div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>Select Plant Running Status</option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>Select Shift Incharge</option>
                  <option>Amit Kumar</option>
                  <option>Ramesh Gupta</option>
                </select>
              </div>
              <div className="col roaster">
                <button
                  className="btn btn-info text-white"
                  style={{ width: "200px", fontSize: "1.2rem" }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "#ffffff" }}
                  />
                  &nbsp; Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="table-responsive">
            <table
              id="example"
              className="nowrap table-bordered"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th onClick={() => requestSort("id")}>
                    Sr.No. <FontAwesomeIcon icon={getSortIcon("id")} />
                  </th>
                  <th onClick={() => requestSort("location")}>
                    Department{" "}
                    <FontAwesomeIcon icon={getSortIcon("location")} />
                  </th>
                  <th onClick={() => requestSort("teamHead")}>
                    Plant Running Status{" "}
                    <FontAwesomeIcon icon={getSortIcon("teamHead")} />
                  </th>
                  <th onClick={() => requestSort("scheduleDate")}>
                    Time In{" "}
                    <FontAwesomeIcon icon={getSortIcon("scheduleDate")} />
                  </th>
                  <th onClick={() => requestSort("shiftInCharge")}>
                    Shift Incharge{" "}
                    <FontAwesomeIcon icon={getSortIcon("shiftInCharge")} />
                  </th>
                  <th onClick={() => requestSort("scheduleDate")}>
                    Report Highlights{" "}
                    <FontAwesomeIcon icon={getSortIcon("scheduleDate")} />
                  </th>
                  <th onClick={() => requestSort("scheduleTime")}>
                    Uploaded Photo{" "}
                    <FontAwesomeIcon icon={getSortIcon("scheduleTime")} />
                  </th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      {sortConfig.direction === "ascending"
                        ? index + 1
                        : sortedData.length - index}
                    </td>
                    <td>{item.location}</td>
                    <td>{item.teamHead}</td>
                    <td>{item.shiftInCharge}</td>
                    <td>{item.securityStaff}</td>
                    <td>{item.scheduleDate}</td>
                    <td>{item.scheduleTime}</td>
                    <td className="text-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn icon-btn btn-outline-dark btn-sm"
                          onClick={() => handleViewMemberClick(item)}
                        >
                          <FontAwesomeIcon icon={faEye} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          className="btn icon-btn btn-outline-success btn-sm"
                          onClick={() => setReportPopupVisible(true)}
                        >
                          <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          className="btn icon-btn btn-outline-danger btn-sm"
                        >
                          <FontAwesomeIcon icon={faTrash} aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row mt-2">
              <div className="col d-flex justify-content-between">
                <div>
                  Showing {filteredData.length > 0 ? 1 : 0} to{" "}
                  {Math.min(entriesPerPage, filteredData.length)} of{" "}
                  {filteredData.length} entries
                </div>
              </div>
            </div>
          </div>
        </div>
        <TeamDetails
          trigger={teamPopupVisible}
          setTrigger={setTeamPopupVisible}
        />
        <AddMemberForm trigger={popupVisible} setTrigger={setPopupVisible} />
        <TeamView
          trigger={viewMemberVisible}
          setTrigger={setViewMemberVisible}
          member={selectedMember}
        />

        {/* <ReportPopup
          trigger={reportPopupVisible}
          setTrigger={setReportPopupVisible}
        /> */}
      </div>
    </>
  );
};

export default UserReport;
