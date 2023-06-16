import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Header from "./components/common/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Post from "./components/Post/Post";
import Profile from "./components/Profile/Profile";
import Purchase from "./components/Purchase/Purchase";
import Cart from "./components/cart/Cart";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chat" element={<Chat />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
