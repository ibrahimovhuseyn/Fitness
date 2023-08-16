import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../Confiq'
import { Link } from 'react-router-dom'
import "../../assets/css/About.css"


function Trainers() {

    const [trainers, setTrainers] = useState()
    const [blogs, setBlogs]= useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${apiUrl}/users`).then(res => setTrainers(res.data))
        axios.get(`${apiUrl}/blogs`).then(res=>setBlogs(res.data))
        setIsLoading(false)
    }, [])

    const strainers = trainers?.slice(0, 4)
    return (
        <div className='col-6'>
            <h1 className='mb-4'>
                OUR TRAINERS
            </h1>
            <div className='trainers'>
                {
                    strainers?.map(item => (
                        <div className='images' key={item.id}>
                            <p><Link className='link' to={`/userblog/${item.id}`}>{item.fullname}</Link></p>
                            <div className="img-wrapper">
                                <img src={item.img_url} alt="image" />
                            </div>
                            <span></span>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Trainers