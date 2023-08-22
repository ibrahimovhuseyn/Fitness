import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../Confiq'
import "../../assets/css/Blogs.css"
import { Alert } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import BlogCard from '../Lib/BlogCard'


function Blogs() {
  const [blogData, setBlogData] = useState()
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    axios.get(`${apiUrl}/blogs`).then(res => setBlogData(res.data))
  }, [])

  
  return (
    <div>
      {
        !blogData ?
          <Alert>Data is nof defined</Alert>
          :
          <div className='container'>
            {
              blogData.map(item => (
                <div className='my-4 body' key={item.id}>
                  <BlogCard
                    blog_id={item.id}
                    title={item.title}
                    description={item.description}
                    img_url={item.img_url}
                    user_id={item.user_id}
                  />
                </div>
              ))
            }
          </div>
      }

    </div>
  )
}

export default Blogs