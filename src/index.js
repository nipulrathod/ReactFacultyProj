import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faculties from "./Faculties";
import FacultyDetail from "./FacultiesDetail";
import Home from "./Home";
import Layout from "./Layout";
import ContactUs from "./ContactUs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/faculties" element={<Faculties />}></Route>
        <Route path="/faculty/:id" element={<FacultyDetail />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
