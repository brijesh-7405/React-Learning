import React,{ useState } from "react";
import "./App.css";
import About from './components/About';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// const element = <h1>Hello, world!</h1>;
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3500);

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is Enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enabled.", "success");
    }
  };
  return (
    <>
      {/* {element} */}
      {/* <Navbar  /> */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<div className="container">
              <About />
            </div>} />            
          <Route path="/" element={<div className="container">
              <TextForm
                heading="Enter your text below"
                mode={mode}
                showAlert={showAlert}
              />
            </div>} />            
        </Routes>
      </Router>
    </>
  );
}
export default App;
