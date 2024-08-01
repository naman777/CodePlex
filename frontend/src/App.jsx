import { Navbar, Problems, Interview, Discuss, IDE, Register } from "./Constants/import"
import { BrowserRouter as Main, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
       <Main>
       <Navbar/>
        <Routes>
          <Route path="/problemset" element={<Problems />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/ide" element={<IDE />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
       </Main>
    </>
  )
}

export default App
