import React, { useEffect, useState } from "react";
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
    height: "",
    weight: "",
  });

  const [result, setResult] = useState(null);
  const [bmicheck, setBmicheck] = useState(null);
  const [displayResult, setDisplayResult] = useState(0);

  useEffect(() => {
    if (formData.height && formData.weight) {
      const heightInMeters = formData.height / 100;
      const bmiValue = (formData.weight / (heightInMeters * heightInMeters)).toFixed(2); // คำนวณ BMI
      setBmicheck(bmiValue);
      setFormData((prevFormData) => ({ ...prevFormData, bmi: bmiValue })); // อัปเดตค่า BMI ใน formData
    }
  }, [formData.height, formData.weight]);

  useEffect(() => {
    // เมื่อมีผลลัพธ์ให้แสดงผลแบบค่อยๆ เพิ่มขึ้น
    if (result) {
      let start = 0;
      const end = parseFloat(result); // แปลงผลลัพธ์ให้เป็นตัวเลข

      if (start !== end) {
        let incrementTime = 10; // ความเร็วของแอนิเมชัน (ค่าน้อยลงคือเร็วขึ้น)
        let step = (end - start) / 100; // แบ่งความต่างออกเป็น 100 ขั้น

        let timer = setInterval(() => {
          start += step;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setDisplayResult(start.toFixed(2)); // แสดงผลลัพธ์พร้อมกับทศนิยม 2 ตำแหน่ง
        }, incrementTime);
      }
    }
  }, [result]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Data submit :',formData);
    try {
      const response = await axios.post(
        "https://health-insurance-backend.onrender.com",
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
          <div className="card p-5 shadow-sm animate-form">
            <h2 style={{font:" 33px 'DBHeaventR', Arial, sans-serif",fontWeight:"bold",marginTop:-20}} className="text-center mb-4 animate-heading">
              Insurance Prediction Form
            </h2><hr></hr>
            <form onSubmit={handleSubmit}>
              <div className="form-row" style={{gap:6,justifyContent:"center",marginTop:10}}>
                <div className="form-group col-md-6">
                  <label style={{fontWeight:"bold"}}>Age</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    placeholder="Enter Age"
                    value={formData.age}
                    onChange={handleChange}
                    min={0}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label style={{fontWeight:"bold"}}>Gender</label>
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

              <div className="form-row" style={{gap:4,justifyContent:"center",marginTop:20}}>
                <div className="form-group col-md-3">
                  <label style={{fontWeight:"bold",marginRight:5}}>Height</label>
                  <label>(cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="height"
                    placeholder="height"
                    value={formData.height}
                    onChange={handleChange}
                    min={0}
                    required
                  />
                </div>
                <div className="form-group col-md-3">
                  <label style={{fontWeight:"bold",marginRight:5}}>Weight</label>
                  <label>(kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    placeholder="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    min={0}
                    required
                  />
                </div>
                
                <div className="form-group col-md-6">
                  <label style={{fontWeight:"bold"}}>Number of Children</label>
                  <input
                    type="number"
                    className="form-control"
                    name="children"
                    placeholder="Number of Children"
                    value={formData.children}
                    onChange={handleChange}
                    min={0}
                    required
                  />
                </div>
              </div>

              <div className="form-row" style={{gap:6,justifyContent:"center",marginTop:20}}>
                <div className="form-group col-md-6">
                  <label style={{fontWeight:"bold"}}>Smoker</label>
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
                  <label style={{fontWeight:"bold"}}>Region</label>
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
                style={{fontWeight:"bold",backgroundColor:'#3ed995',borderColor:'#3ed995'}}
                type="submit"
                className="btn btn-primary btn-block mt-4 animate-button"
              >
                Submit
              </button>
            </form>
            {result && ( 
              <h2 style={{font:" 25px 'DBHeaventR', Arial, sans-serif"}} className="text-center mt-4">
                Predicted Insurance Charge: ${displayResult} 
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// | #checkbmi:{bmicheck}