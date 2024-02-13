import "./App.css";
import { Outlet } from "react-router-dom";

import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
