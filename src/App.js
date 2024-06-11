import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import UiComponent from "./components/UiComponent/UiComponent";
import Sidebar from "./components/sidebar/sidebar";
import ReportUi from "./components/UiComponent/ReportUi";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
