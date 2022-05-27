import { useEffect, useState } from "react"

const useAdmin=user=>{
    const [admin, setAdmin]=useState(false);
    const[adminLoading,setAdminLoadung]=useState(true)
    useEffect(()=>{
        const email=user?.email;
        if(email){
            const url=`http://localhost:5000/admin/${email}`
                    console.log(url)
            fetch(url, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    
                },
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken usen admin', data);
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