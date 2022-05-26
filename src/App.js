import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Sheared/Navbar";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase ";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashbord from "./Pages/Dashbord/Dashbord";
import MyOrder from "./Pages/Dashbord/MyOrder";
import AddAReview from "./Pages/Dashbord/AddAReview";
import Footer from "./Pages/Sheared/Footer";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/dashbord" element={<RequireAuth><Dashbord></Dashbord></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="/dashbord/myreview" element={<AddAReview></AddAReview>}></Route>
          <Route path="/dashbord/MyPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        </Route>
        <Route
          path="/purchas"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchas/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
