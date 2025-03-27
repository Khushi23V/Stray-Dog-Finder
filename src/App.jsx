import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import AdoptPage from "./components/AdoptPage";
import VolunteerPage from "./components/VolunteerPage";
import ViewPage from "./components/ViewPage";
import ReportPage from "./components/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/AdoptPage" element={<AdoptPage />} />
        <Route path="/VolunteerPage" element={<VolunteerPage />} />
        <Route path="/ViewPage" element={<ViewPage />} />
        <Route path="/ReportPage" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;