import Navbar from "./components/navbar"
import View1 from "./components/view1"
import View2 from "./components/view2"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          
          <Route path="/view1" element={<View1 />} />
          <Route path="/view2" element={<View2 />} />
        </Routes>
      </div>
    </>
  )
}

export default App