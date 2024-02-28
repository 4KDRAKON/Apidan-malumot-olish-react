import React from "react";
import { useParams,useNavigate } from "react-router-dom";


function Profil(){
    const [user,setuser] = React.useState()
    const [loading,setloading] = React.useState(true)
    const Navigation = useNavigate()
    const {user_id} = useParams()

    React.useEffect(()=>{
            fetch("https://reqres.in/api/users/" + user_id)
            .then((res)=>res.json())
            .then((data)=>{
                if(data?.data){
                    setuser(data?.data)
                    setloading(false)
                }
            })
    },[])
    return(
        <>

        <div className="container">
            <ul className="ul__list2">
                {user && (
                    <li className="Blurr">
                        <img src={user.avatar} alt="nima" />
                    <h2>{user.first_name + "" + user.last_name}</h2>
                    <a href={`mailto:` + user.email}>{user.email}</a>
                    <button className="btn" onClick={()=>Navigation(-1)}>Last Page</button>
                    </li>
                )}
            </ul>
            {loading && <h1>Loading...</h1>}
        </div>
        
        </>
    )
}
export {Profil};