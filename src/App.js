import "./App.css";
import { LoginPage } from "./Components/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar/Navbar";
import { Routes, Router, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import { Layout } from "./Layout";

function App() {
  return (
    <div className="App">
      {/* <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="portfolio" element={<Portfolio/>}> </Route>
      <Route path="about" element={<About/>}> </Route>
      <Route path="blog" element={<Blog/>}> </Route>
      <Route path="contact" element={<Contact/>}></Route>
      </Route>

      <Route path="/login" element={<LoginPage/>}></Route>
     </Routes>  */}

      {/* <LoginPage/> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<LoginPage />}>
          {" "}
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
