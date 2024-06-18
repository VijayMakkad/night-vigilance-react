import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import UiComponent from "./components/UiComponent/UiComponent";
import ReportUi from "./components/UiComponent/ReportUi";
import UserDashBoardUI from "./components/UiComponent/UserDashBoardUI";

const CLERK_API_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
