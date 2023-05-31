import Navbar from "./Navbar"
// import Pricing from "./Pages/Pricing"

import Products from "./Pages/Products"
import Bundle from "./Pages/Bundle"
import Home from "./Pages/Home"
import Resources from "./Pages/Resources"
// import Havefun from "./Pages/Havefun"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bundle" element={<Bundle />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  )
}

export default App
