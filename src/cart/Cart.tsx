import React, { useEffect, useState } from 'react'
import './Cart.css'
import { CartService } from './cart.service'
import { Cart as CartModel } from '../data-models/model/Cart.model'

const Cart: React.FC = () => {
    const [cart, setCart] = useState<CartModel | null>(null)
    const service = new CartService()
    const [dateTime, setDateTime] = useState<Date | null>(null)

    const convertToDateTime = () => {
        if (!cart) return
        const date = new Date(cart.created)

        if (isNaN(date.getTime())) return
        setDateTime(date)
    }

    const getCart = () => {
        service.getCart().then((response) => {
            setCart(response.data)
            convertToDateTime()
        })
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <div className="d-flex flex-column gap-3 align-items-center">
            <div className="card m-3 w-50">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                        <i className="bi bi-cart3 cart-icon mx-3"></i>
                        <div className="date">
                            Created at: { dateTime?.toLocaleString() }
                        </div>
                    </div>
                    
                    <div className="d-flex flex-column align-items-center">
                        <div className="text-title">Total:</div>
                        <div className="text">{ cart?.totalPrice } $</div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="text-title">Items:</div>
                        <div className="text">{ cart?.quantity }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
