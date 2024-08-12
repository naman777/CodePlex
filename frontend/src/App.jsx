import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Problems from "./Pages/Problems";
import SolveProblem from "./Pages/SolveProblem";
import Interview from "./Pages/Interview";
import Discuss from "./Pages/Discuss";
import IDE from "./Pages/IDE";
import Login from "./Pages/Login";
import CreateAcc from "./Pages/CreateAcc";
import AdminLogin from "./Pages/AdminLogin";
import Post from "./Pages/Post";
import Navbar from "./component/Navbar";
import './styles.css';
import Banner from "./component/Banner";

function App() {
  return (
    <>
      <Main>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pt-[50px]">
          <Navbar />
          <Banner />
          <Routes>
            <Route path="/" element={<Problems />} />
            <Route path="/solve-problem/:id" element={<SolveProblem />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/ide" element={<IDE />} />
            <Route path="/login" element={<Login />} />
            <Route path="/acc-create" element={<CreateAcc />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </Main>
    </>
  );
}

export default App;