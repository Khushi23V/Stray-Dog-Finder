import React, { useState } from "react";
import "../styles/swanik.css";

function ReportPage() {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    age: "",
    description: "",
    location: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingReports = JSON.parse(localStorage.getItem("strayReports")) || [];

    existingReports.push(formData);

    localStorage.setItem("strayReports", JSON.stringify(existingReports));

    setFormData({
      name: "",
      sex: "",
      age: "",
      description: "",
      location: "",
      email: "",
      phone: "",
    });

    alert("Stray Dog Reported!");
  };

  return (
    <main className="report-page">
      <h1 className="h1report">REPORT A STRAY DOG</h1>
      <div className="image-r">
        <h1 className="h1-r">Add Photo</h1>
      </div>
      <div className="formdiv">
        <form className="form-r" onSubmit={handleSubmit}>
          <label htmlFor="name" className="name-r">
            Name:
            <input id="name" className="name-inp long" type="text" value={formData.name} onChange={handleChange} placeholder="Enter name" required />
          </label>
          <label htmlFor="sex" className="sex-r">
            Sex:
            <input id="sex" className="sex-inp long" type="text" value={formData.sex} onChange={handleChange} placeholder="Enter sex" required />
          </label>
          <label htmlFor="age" className="age-r">
            Age (optional):
            <input id="age" className="age-inp long" type="text" value={formData.age} onChange={handleChange} placeholder="Enter age" />
          </label>
          <label htmlFor="desc" className="desc-r">
            Description:
            <textarea id="description" className="desc-inp" name="desc-inp" rows="2" cols="10" value={formData.description} onChange={handleChange} placeholder="Enter details" required />
          </label>
          <label htmlFor="location" className="loc-r">
            Location:
            <input id="location" className="loc-inp" type="text" value={formData.location} onChange={handleChange} placeholder="Enter location" required />
          </label>
          <label htmlFor="email" className="email-r">
            Email ID:
            <input id="email" className="email-inp" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email ID"/>
          </label>
          <label htmlFor="phone" className="phone-r">
            Phone No. :
            <input id="phone" className="phone-inp" type="number" value={formData.phone} onChange={handleChange} placeholder="Enter your phone no." required maxLength="10"/>
          </label>
          <div className="submitb-r">
            <input className="submit-r" type="submit" value="Report" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default ReportPage;
