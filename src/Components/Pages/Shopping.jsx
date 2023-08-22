import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { apiUrl } from '../../Confiq'
import "../../assets/css/Shopping.css"
import { AppContext } from '../../context/AppContext'

function Shopping() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`${apiUrl}/products`).then(res => setProducts(res.data))
    }, [])

    const {addToCard} = useContext(AppContext)

    console.log(products);
    return (
        <div>

            <div className='shopping'>
                {
                    products.map(item => (
                        <div className='product' key={item.id}>
                            <h1 className='text-center'>{item.name}</h1>
                            <div className='item_about'>
                                <div className="img-wrapper">
                                    <img src={item.img_url} alt="img" />
                                </div>
                                <p>{item.about}</p>
                            </div>
                            <button
                                className='btn btn-primary absolute'
                                onClick={()=>addToCard(item)}
                            >
                                Buy online:
                                {item.price}$
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shopping