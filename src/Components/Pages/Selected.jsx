import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Alert, Button, Table } from 'reactstrap';
import "../../assets/css/Shopping.css"

function Selected() {
    const { product, count } = useContext(AppContext)
    console.log(product);
    return (
        <div className='selected'>
            {
                !product.length ?
                    <Alert>No products have been selected</Alert>
                    :
                    <Table>
                        <thead>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Total Price</th>
                        </thead>
                            <tbody>
                                {
                                    product.map(item => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.price}$</td>
                                            <td>{item.count}</td>
                                            <td>{item.price * item.count}$</td>
                                            <td>
                                                <Button
                                                className='btn'
                                                >
                                                    Delete one
                                                </Button>
                                            </td>
                                            <td>
                                                <Button>
                                                    One more
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                    </Table>
            }
        </div>
    )
}

export default Selected