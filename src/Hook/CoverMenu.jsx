 
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

 

const CoverMenu = () => {
    // const [menuData,setMenuData]=useState([])
    // const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     fetch("http://localhost:5000/menus")
    //     .then(res=>res.json())
    //     .then(data=>{
    //        setMenuData(data)
    //        setLoading(false)
    //     })
    // },[])
    // return [menuData,loading]

    const axiosPublic=useAxiosPublic()
    const {data:menuData=[],isPending:loading,refetch}=useQuery({
        queryKey:["menu"],
        queryFn:async ()=>{
            const res= await axiosPublic.get("/menus")
             return res.data
        }
    })
    return [menuData,loading,refetch]
};

export default CoverMenu;