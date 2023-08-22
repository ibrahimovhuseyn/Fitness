import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { apiUrl } from '../../Confiq'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { AppContext } from '../../context/AppContext';

function OurProducts() {
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState({})

  const {addToCard} = useContext(AppContext)

  useEffect(() => {
    axios.get(`${apiUrl}/products`).then(res => setProducts(res.data))
  }, [])


  return (
    <div className='col-6'>
      <h1 className='text-center mb-4'>Our Products</h1>

      <div className='products'>
        {
          products.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
              <div className="img_wrapper">
                <img src={item.img_url} alt="img" />
              </div>
              <button
                className='btn btn-primary mt-2'
                onClick={()=>addToCard(item)}
              >Add to bag
              </button>

            </div>
          ))
        }
      </div>


    </div>
  )
}

export default OurProducts