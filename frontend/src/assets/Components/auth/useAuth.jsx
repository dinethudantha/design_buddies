import axios from "axios";
import { useEffect, useState } from "react";
import api, { getCsrfCookie } from "../../../services/api";

function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // 1️⃣ make sure CSRF cookie exists before calling /api/user
                await getCsrfCookie();

                // 2️⃣ check user
                const res = await api.get("/api/user");
                setUser(res.data);
            } catch (err) {
                console.log("Not authenticated:", err.response?.status);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return { user, loading };
}

export default useAuth;
