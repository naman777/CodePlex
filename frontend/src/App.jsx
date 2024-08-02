import { Navbar, Problems, Interview, Discuss, IDE, Register, Post, CreateAcc } from "./Constants/import"
import { BrowserRouter as Main, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
       <Main>
        <div className="pt-[50px]">
       <Navbar/>
        <Routes>
          <Route path="/problemset" element={<Problems />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/ide" element={<IDE />} />
          <Route path="/login" element={<Register/>}/>
          <Route path="/createacc" element={<CreateAcc />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        </div>
       </Main>
    </>
  )
}

export default App
