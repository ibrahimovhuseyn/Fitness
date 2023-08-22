import React, { useContext, useEffect, useState } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Badge,
    Alert,
    Card,
} from 'reactstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AppContext } from '../../../context/AppContext';
import { Link } from 'react-router-dom';
import "../../../assets/css/Shopping.css"

function Bag() {
    const [total, setTotal] = useState(0)
    const [isopen, setIsOpen] = useState(false)

    const { product, count } = useContext(AppContext)


    const toggle = () => {
        setIsOpen(prevstate => !prevstate)
    }

    const calculate = () => {
        const total_price = product.reduce((acc, item) => {

            console.log("item", item);
            console.log("currentValue", acc);

            return (item.price * item.count) + acc
        }, 0)

        console.log("total_price", total_price);

        setTotal(total_price)
    }

    useEffect(() => {
        calculate()
    }, [count])
    return (
        <div>
            <Container>
                <div className='bag'>
                    <Dropdown
                        isOpen={isopen}
                        toggle={toggle}

                    >
                        <DropdownToggle
                            color='primary'
                        >
                            <AiOutlineShoppingCart />
                            {
                                count > 0 &&
                                <Badge color='danger'>{count}</Badge>

                            }
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                !product.length ?
                                    <Alert color='warning'>Your bag is empty</Alert>
                                    :
                                    ""
                            }
                            {
                                product.map(item => (
                                    <DropdownItem key={item.id}>
                                        {item.name} x <b>{item.count}</b>
                                    </DropdownItem>
                                ))
                            }
                            <DropdownItem divider></DropdownItem>
                            <DropdownItem>
                                <Link
                                to="/selected"
                                >
                                    <h5>Total: {total} AZN</h5>
                                </Link>
                                <p className='hover'>See all your selections</p>
                            </DropdownItem>
                        </DropdownMenu>


                    </Dropdown>
                </div>
            </Container>
        </div>
    )
}

export default Bag