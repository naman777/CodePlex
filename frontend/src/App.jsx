import { Navbar, Problems, Interview, Discuss, IDE, Login, Post, CreateAcc, AdminLogin, SolveProblem } from "./Constants/import"
import { BrowserRouter as Main, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
       <Main>
        <div className="pt-[50px]">
       <Navbar/>
        <Routes>
          <Route path="/" element={<Problems />} />
          <Route path="/solve-problem/:id" element={<SolveProblem />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/ide" element={<IDE />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/acc-create" element={<CreateAcc />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        </div>
       </Main>
    </>
  )
}

export default App
