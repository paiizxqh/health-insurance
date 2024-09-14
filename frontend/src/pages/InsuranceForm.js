import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/InsuranceForm.css";
import axios from "axios";

export function InsuranceForm() {
  const [formData, setFormData] = useState({
    sex: "",
    children: "",
    smoker: "",
    region: "",
    bmi: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Data submit :',formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      console.log('Response :',response);
      setResult(response.data.insurance_charge);
    } catch (error) {
      console.error("Error making prediction", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm animate-form">
            <h2 className="text-center mb-4 animate-heading">
              Insurance Prediction Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Age</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    placeholder="Enter Age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Gender</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sex"
                      value="male"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sex"
                      value="female"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>

              {/* <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>BMI</label>
                  <input
                    type="number"
                    className="form-control"
                    name="bmi"
                    placeholder="BMI"
                    value={formData.bmi}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Number of Children</label>
                  <input
                    type="number"
                    className="form-control"
                    name="children"
                    placeholder="Number of Children"
                    value={formData.children}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Smoker</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="smoker"
                      value="yes"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="smoker"
                      value="no"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label>Region</label>
                  <select
                    className="form-control"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="northwest">Northwest</option>
                    <option value="northeast">Northeast</option>
                    <option value="southeast">Southeast</option>
                    <option value="southwest">Southwest</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mt-4 animate-button"
              >
                Submit
              </button>
            </form>
            {result && (
              <h2 className="text-center mt-4">
                Predicted Insurance Charge: ${result}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
