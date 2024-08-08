import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom"
import Main from "./pages/Main"
import Home from "./pages/home/Home"
import Events from "./pages/events/Events"
import Explore from "./pages/explore/Explore"
import About from "./pages/about/About"
import Story from "./pages/stroies/Story"
import Appoinment from "./pages/appoinment/Appoinment"
import Doctors from "./pages/doctors/Doctors"

function App() {
 

  return (
    <>
    <Router>
<Routes>
<Route path="/" element={<Navigate to="/home" />} />
  <Route path="*" element={<Main />} > 
  <Route path="home" element={<Home />} />
  <Route path="events" element={<Events />} />
  <Route path="explore" element={<Explore />} />
  <Route path="about" element={<About />} />
  <Route path="stories" element={<Story />} />
  <Route path="appointment" element={<Appoinment />} />
  <Route path="doctor" element={<Doctors />} />
  
  </Route>
</Routes>
    </Router>
    </>
  )
}

export default App
