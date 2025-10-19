import React, { useState } from "react";
import { registerUser } from "../../Services/AuthServices";

function AdminRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Errors හා success messages වලට
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (formData.password !== formData.password_confirmation) {
      setError(`Password Does'nt match!`);
      setLoading(false);
      return;
    }

    try {
      // Register function එක call කරනවා
      await registerUser(formData);
      setSuccess("Registration successful! You can now login.");

      // Form එක clear කරනවා
      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (err) {
      // Error එකක් ආවොත් display කරනවා
      if (err.response && err.response.data.errors) {
        // Laravel validation errors
        const errors = err.response.data.errors;
        setError(Object.values(errors).flat().join(", "));
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error}
          <button
            type="button"
            className="btn-close"
            onClick={() => setError("")}
          ></button>
        </div>
      )}

      {/* Success Alert */}
      {success && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {success}
          <button
            type="button"
            className="btn-close"
            onClick={() => setSuccess("")}
          ></button>
        </div>
      )}
      <div className="container p-5 d-flex align-items-center justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="fw-bold text-dark">Create Account</h2>
              <p className="text-muted mb-0">
                Join us today! It only takes a minute.
              </p>
            </div>

            {/* Form */}
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
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
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
                    value={formData.password}
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
                    value={formData.password_confirmation}
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
                <a
                  href="#"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#764ba2" }}
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRegisterForm;
