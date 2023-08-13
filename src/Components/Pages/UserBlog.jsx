import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../../Confiq'
import "../../assets/css/Blogs.css"

function UserBlog() {
    const [data, setData] = useState([])
    const { userId } = useParams()
    const[name, setName]= useState("")

    useEffect(() => {
        axios.get(`${apiUrl}/blogs`).then(res => {
            setData(res.data.filter(x => x.user_id === Number(userId)))
        })
    }, [])
    
    useEffect(()=>{
        axios.get(`${apiUrl}/users/${userId}`).then(res=>{
            setName(res.data.fullname)
            
        })
    },[])

    return (
        <div className='container'>
            <h1 className='text-center'>{name}'s blogs</h1>
            {
                data.map(item=>(
                    <div key={item.id} className='user_blog mt-5'>
                        <div className="img_wrapper">
                            <img src={item.img_url} alt="image" />
                        </div>
                        <div>
                            <h2 className='text-center mb-5'>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default UserBlog