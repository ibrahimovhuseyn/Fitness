import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../../Confiq'
import "../../assets/css/Blogs.css"


function BlogItem() {
    const [data, setData]= useState({})
    const { id } = useParams()


    useEffect(() => {
        axios.get(`${apiUrl}/blogs/${id}`).then(res => {
            setData(res.data)
        })
    }, [])

    useEffect(()=>{
axios.get(`${apiUrl}/users/${data.user_id}`).then(res=>{
setData({...data, author: res.data.fullname})
})
    },[data.id])

    return (
        <div className='blog_item container'>
                <h2 className='text-muted fw-bold'>{data.author}</h2>
        
            <div className="img_wrapper text-center  my-4">
                <img src={data.img_url} alt="" />
            </div>
            <div className="blog_content">
                <h4 className='text-center m-4'>{data.title}</h4>
                <p>{data.description}</p>
            </div>
            
        </div>
    )
}

export default BlogItem