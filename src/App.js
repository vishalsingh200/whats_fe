import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
function App() {

  const dispatch = useDispatch();

  return (
    <div>
      <Router>
        <button 
        onClick= { () => {
          dispatch(logout());
        }}>logout</button>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
