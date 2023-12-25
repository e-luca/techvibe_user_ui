import React, { useEffect, useState } from 'react'
import './Cart.css'
import { CartService } from './cart.service'
import { Cart as CartModel } from '../data-models/model/Cart.model'
import { CartItem as CartItemModel } from '../data-models/model/CartItem.model'
import CartItem from './cart-item/CartItem'
import { useNavigate } from 'react-router-dom'

const Cart: React.FC = () => {
    const [cart, setCart] = useState<CartModel | null>(null)
    const [dateTime, setDateTime] = useState<Date | null>(null)
    const [cartItems, setCartItems] = useState<CartItemModel[]>([])
    const service = new CartService()
    const navigate = useNavigate()

    const convertToDateTime = () => {
        if (!cart) return
        const date = new Date(cart.created)

        if (isNaN(date.getTime())) return
        setDateTime(date)
    }

    const getItems = () => {
        if (!cart) return
        service.getCartItems(cart.id).then((response) => {
            setCartItems(response.data)
        })
    }

    const getCart = () => {
        service.getCart().then((response) => {
            setCart(response.data)
        })
    }

    const removeItem = (itemId: number) => {
        service.removeItemFromCart(itemId).then(() => getItems())
    }

    const removeCart = () => {
        if (!cart) return
        service.removeCart(cart.id).then(() => navigate('/'))
    }

    useEffect(() => {
        getCart()
    }, [])

    useEffect(() => {
        getItems()
        convertToDateTime()
    }, [cart])

    return (
        <div className="d-flex flex-column gap-3 align-items-center">
            <h3 className="mt-3">Cart</h3>
            <div className="card m-3 w-50 border-danger">
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
                    <button type="button"
                            title="Delete cart" 
                            className="btn btn-danger align-self-center" 
                            onClick={ removeCart }>
                                Delete
                    </button>
                </div>
            </div>
            <div className="w-50">
                { cartItems.map((item) => (<CartItem key={ item.itemId } item={ item } handleRemove={ removeItem } />)) }
            </div>
        </div>
    )
}

export default Cart
