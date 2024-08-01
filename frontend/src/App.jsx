import { Navbar, Problems, Interview, Discuss, IDE, Register } from "./Constants/import"
import { BrowserRouter as Main, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
       <Main>
       <Navbar/>
       <div className="pt-[80px]">
        <Routes>
          <Route path="/problemset" element={<Problems />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/ide" element={<IDE />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </div>
       </Main>
    </>
  )
}

export default App
