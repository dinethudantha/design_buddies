import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api, { getCsrfCookie } from "../../../services/api";

function SignOut() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const handleSignOut = async () => {
            try {

                await api.get("/sanctum/csrf-cookie",{withCredentials:true}); 


                const response = await api.post("/logout"); // ✅ api already has withCredentials

                if (response.status === 200 || response.status === 204) {
                    toast.success("Signed out successfully!");
                } else {
                    toast.error("Unexpected logout response");
                }

                setLoading(false);
                navigate("/login", { state: { message: "User logged out!" } });
            } catch (error) {
                console.error("Sign out failed:", error);
                toast.error("Sign out failed. Please refresh and try again.");
                setLoading(false);
                navigate("/login", { state: { message: "User logged out (failed attempt)" } });
            }
        };

        handleSignOut();

    }, [navigate]);

    if (loading) return <p>Signing Out...</p>;

    return null; 
}

export default SignOut;
