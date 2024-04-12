import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import MyEvents from "./pages/MyEvents";
import { useSelector } from "react-redux";
import Registration from "./pages/Registration";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute auth={isLoggedIn} element={<Dashboard />} />}
        />
        <Route
          exact
          path="/myevents"
          element={<PrivateRoute auth={isLoggedIn} element={<MyEvents />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
