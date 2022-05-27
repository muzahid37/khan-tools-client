import { useEffect, useState } from "react"

const useAdmin=user=>{
    const [admin, setAdmin]=useState(false);
    const[adminLoading,setAdminLoadung]=useState(true)
    useEffect(()=>{
        const email=user?.email;
        console.log(email)
        if(email){
            fetch(`https://still-shelf-13702.herokuapp.com/admin/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    
                },
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setAdmin(data.admin);
                setAdminLoadung(false);

                
            })
        }

    },[user]);
    return [admin,adminLoading]
}
export default useAdmin;