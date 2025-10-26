import React from 'react'
import AuthLayout from "./AuthLayout";
function AdminLoginForm() {
    return (
        <>
            <AuthLayout title="Login" subTitle="Welcome back! Please enter your details." >
                <form >
                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold d-flex align-items-center">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control rounded-3 py-2"
                            name="email"
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
            </AuthLayout>
        </>
    )
}

export default AdminLoginForm