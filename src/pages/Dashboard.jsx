import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = ({setIsLoggedIn}) => {
    const [balance , setBalance] = useState(0) ;

    useEffect( () => {
        async function fetchbalance(){
            try {
                const token = localStorage.getItem("token") ;
                const res  = await axios.get("http://localhost:3000/api/v1/account/balance" , {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setBalance(res.data.balance);
    
            } catch (error) {
                console.error(error);
            }
        }
        fetchbalance()
    } , [])

    return <div>
        <Appbar setIsLoggedIn={setIsLoggedIn}  />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}