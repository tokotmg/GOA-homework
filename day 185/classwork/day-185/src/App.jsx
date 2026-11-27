import About from "./About"
import Home from "./Home"
import Contacts from "./Contacts"
import Cars from "./Cars"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Cars" element={<Cars />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
