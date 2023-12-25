import React, { useEffect, useState } from 'react'
import './CartItems.css'
import { CartItem as CartItemModel } from '../../data-models/model/CartItem.model'

interface CartItemProps {
    item: CartItemModel,
    handleRemove: (itemId: number) => void
}

const CartItem: React.FC<CartItemProps> = ({ item, handleRemove }) => {
    const [dateTime, setDateTime] = useState<Date | null>(null)

    const convertToDateTime = () => {
        if (!item) return
        const date = new Date(item.updated)

        if (isNaN(date.getTime())) return
        setDateTime(date)
    }

    useEffect(() => {
        convertToDateTime()
    }, [item])

    return(
        <div>
            <div className="card border-danger mb-1">
                <div className="card-body d-flex gap-3 align-items-center justify-content-between">
                    <div className="d-flex gap-3 align-items-center">
                        <img className="item-img"                 
                            src={ item.imageUrl ? item.imageUrl : require('../../assets/img/default_device.png') } 
                            alt={ item.description } />
                        <div className="d-flex flex-column gap-2">
                            <div className="item-name">{ item.name }</div>
                            <div>{ item.description }</div>
                        </div>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="d-flex flex-column gap-2 align-items-center">
                            <div className="item-column">Quantity</div>
                            <div className="item-column">{ item.quantity }</div>
                        </div>
                        <div className="d-flex flex-column gap-2 align-items-center">
                            <div className="item-column">Price</div>
                            <div>{ item.price } $</div>
                        </div>
                        <div className="d-flex flex-column gap-2 align-items-center">
                            <div className="item-column">Updated</div>
                            <div>{ dateTime?.toLocaleDateString() }</div>
                        </div>

                        <button type="button"
                                title="Remove from cart" 
                                className="btn btn-danger align-self-center" 
                                onClick={ () => { handleRemove(item.itemId) } }>
                                    <i className="bi bi-cart-dash"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
