import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import UiComponent from "./components/UiComponent/UiComponent";
import Clerk from "./clerk";

const CLERK_API_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <BrowserRouter>
        <Clerk />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashBoard" element={<UiComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
