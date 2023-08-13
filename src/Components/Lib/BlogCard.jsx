import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({
    title,
    description,
    img_url,
    blog_id
}) {
    return (
        <div className='blogs'>
            <div className="img_wrapper">
                <img src={img_url} alt="image" />
            </div>
            <div className='content'>
                <h1 className='text-center mb-4'>{title}</h1>
                <p className='mx-2'>{description}</p>
                <Link to={`/blogs/${blog_id}`} className='btn btn-primary'>Read More</Link>
            </div>

        </div>
    )
}

export default BlogCard