import React, { useState } from 'react'
import AuthLayout from "./AuthLayout";
import api, { getCsrfCookie } from '../../../services/api';
import { Link, useNavigate } from 'react-router-dom';
function AdminLoginForm() {

    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        try {
            await getCsrfCookie();

            const response = await api.post("/login", formData, { withCredentials: true });

            if (response.status === 204 || response.status === 201) {
                console.log("Login Successful!");
                navigate("/dashboard");
            };
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error("Validation Errors:", error.response.data.errors);
            } else {
                console.error("Login failed:", error);
            }
        };
    };

    return (
        <>
            <AuthLayout title="Login" subTitle="Welcome back! Please enter your details." >
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold d-flex align-items-center">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control rounded-3 py-2"
                            name="email"
                            onChange={handleChange}
                            placeholder="example@gmail.com"
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
                                onChange={handleChange}
                                className="form-control rounded-3 py-2 pe-5"
                                placeholder="Create a strong password"
                            />
                        </div>
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-100 text-white fw-semibold py-3 shadow"
                    >
                        Login
                    </button>
                </form>
                {/* Footer */}
                <div className="text-center mt-4">
                    <p className="text-muted mb-0">
                        Don't have an account?{" "}
                        <Link to='/register'>Sign Up</Link>
                    </p>
                </div>
            </AuthLayout>
        </>
    )
}

export default AdminLoginForm