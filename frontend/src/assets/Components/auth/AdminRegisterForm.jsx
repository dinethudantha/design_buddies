import { useState } from "react";
import api, { getCsrfCookie } from "../../../services/api";
import axios from "axios";
import AuthLayout from "./AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import AdminLoginForm from "./AdminLoginForm";
function AdminRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // CSRF cookie for Sanctum
      // await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      //   withCredentials: true,
      // });

      await getCsrfCookie();

      // Register user
      const response = await axios.post(
        "http://127.0.0.1:8000/register",
        formData,
        { withCredentials: true }
      );

      if (response.status === 204 || response.status === 201) {
        console.log("User Created Successfully!!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("Validation Errors:", error.response.data.errors);
      } else {
        console.error("Registration failed:", error);
      }
    }
  };

  return (
    <>
      <AuthLayout title="Create Account" subTitle="Join us today! It only takes a minute.">
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold d-flex align-items-center">
              Full Name
            </label>
            <input
              type="text"
              className="form-control rounded-3 py-2"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold d-flex align-items-center">
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-3 py-2"
              name="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold d-flex align-items-center">
              Password
            </label>
            <div className="position-relative">
              <input
                type="password"
                name="password"
                className="form-control rounded-3 py-2 pe-5"
                placeholder="Create a strong password"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold d-flex align-items-center">
              Confirm Password
            </label>
            <div className="position-relative">
              <input
                type="password"
                name="password_confirmation"
                className="form-control rounded-3 py-2 pe-5"
                placeholder="Re-enter your password"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 text-white fw-semibold py-3 shadow"
          >
            Create Account
          </button>


        </form>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            Already have an account?{" "}
            <Link to='/login'>Sign in</Link>
          </p>
        </div>
      </AuthLayout>
    </>
  );
}

export default AdminRegisterForm;
