import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import imgBgLogin from "../../../Assets/Auth/img-bg-login.png";
import bgLogin from "../../../Assets/Auth/bg-login.png";
import logoLogin from "../../../Assets/Auth/logo-icon.png";
import { sendOtp } from "../../../Storages/Actions/ResetPassword"

export default function SendOtp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch()  

  const handleOtp = (e) => {
    e.preventDefault();
    let data = {
      email,
      otp
    };
    dispatch(sendOtp(data, navigate));
  };

  // const email = localStorage.getItem("email")

  return (
    <div className="container-fluid">
      <div className="p-5 ms-5 me-5">
        <div className="row row-cols-1 d-flex align-items-center">
          <div className="col-xl-6">
            <div className="row row-cols-xl-1">
              <div className="col position-relative">
                <div className="">
                  <img src={imgBgLogin} className="img-fluid w-100" alt="" style={{ height: "100vh" }} />
                </div>
                <div className="">
                  <img src={bgLogin} className="img-fluid position-absolute top-50 start-50 translate-middle text-white w-100" alt="" style={{ height: "100vh" }} />
                  <h1 className="position-absolute top-50 start-50 translate-middle text-white w-75">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                  <div className="position-absolute top-0 start-0 p-5">
                    <img src={logoLogin} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 d-flex align-items-start justify-content-start">
            <div className="row row-cols-xl-1">
              <div className="col" style={{ height: "40rem", width: "50rem" }}>
                <div className="p-5 mt-5">
                  <h1>Reset Password</h1>
                  <h5 className="mb-5">You need to change your password to activate your account</h5>
                  <form className="mt-5" onSubmit={handleOtp}>
                    <div className="col mb-4">
                      <label className="form-label">Email</label>
                      <input required value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="form-control p-3" placeholder="Masukan Email" />
                    </div>
                    <div className="col mb-4">
                      <label className="form-label">Otp</label>
                      <input required value={otp} onChange={(e) => setOtp(e.target.value)} name="otp" type="text" className="form-control p-3" placeholder="Masukan OTP" />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-warning text-white shadow-none p-3 w-100">Go To Change Password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
