import React from "react";
import { Link } from "react-router-dom";

function Asosiy(){
    const [user,setuser] = React.useState([])
    const [loading,setloading] = React.useState(true)

    React.useEffect(()=>{
      (async()=>{
    const da = await fetch("https://reqres.in/api/users?page1=1")
    const data = await da.json()
    console.log(data);

    if(data?.data){
        setuser(data?.data)
        setloading(false)
    }
        })()
    },[])
    return(
        <>

        <div className="container">
            <ul className="ul__list">
                {user?.length > 0 && user.map((users)=>(
                    <Link className="h3" key={users.id} to={"/profil/" + users.id}>
                        <li className="Blur" key={users.id}>
                            <img src={users.avatar} alt="avatar" />
                            <h3 className="h3">{users.first_name + " " + users.last_name}</h3>
                        </li>
                    </Link>
                ))}
            </ul>
           {loading && <h1>Loading...</h1>}
        </div>
        
        </>
    )
}

export {Asosiy};