 
import { useEffect, useState } from "react";

 

const CoverMenu = () => {
    const [menuData,setMenuData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
           setMenuData(data)
           setLoading(false)
        })
    },[])
    return [menuData,loading]
};

export default CoverMenu;