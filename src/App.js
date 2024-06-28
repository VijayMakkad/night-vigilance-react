import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import UiComponent from "./components/UiComponent/UiComponent";
import ReportUi from "./components/UiComponent/ReportUi";
import UserDashBoardUI from "./components/UiComponent/UserDashBoardUI";
import UserReportUi from "./components/UiComponent/UserReportUI";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Sidebar /> */}
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashBoard" element={<UiComponent />}></Route>
          <Route path="/ReportUi" element={<ReportUi />} />
          <Route path="/UserDashboard" element={<UserDashBoardUI />} />
          <Route path="/UserReportUI" element={<UserReportUi/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
