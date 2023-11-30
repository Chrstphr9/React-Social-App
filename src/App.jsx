 import Home from './pages/Home/Home'
 import Login from './pages/login/Login'
 import Register from './pages/register/Register'
 import Profile from './components/Profile/Profile'

 import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profi\
        \e" element={<Profile />} />
      </Routes>
    </Router>
    
  )
}

