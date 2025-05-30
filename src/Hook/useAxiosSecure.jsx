import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    useEffect(() => {
        // request interceptor-----------
        const requestInterceptor = axiosInstance.interceptors.request.use(function (config) {
            const token = localStorage.getItem("access_token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config
        }, function (err) {
            return Promise.reject(err)
        })

        //  response interceptor---------
        const responseInterceptor = axiosInstance.interceptors.response.use((response) => {
            return response
        },
            async (error) => {
                const status = error.response.status
                console.log("status error in interceptor", status)
                if (status === 401 || status === 403) {
                    await logOut();
                    navigate("/login")
                }
                return Promise.reject(error)
            }
        )

        return (() => {
            axiosInstance.interceptors.request.eject(requestInterceptor)
            axiosInstance.interceptors.response.eject(responseInterceptor)
        })
    }, [navigate, logOut])

    return axiosInstance
};

export default useAxiosSecure;