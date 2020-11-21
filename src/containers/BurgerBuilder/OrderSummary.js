import React from 'react'
import Button from '../../components/UI/Button'

function OrderSummary(props) {
    const ingredientsSummary = Object.entries(props.ingredients)
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary.map((ing, index) => {
                    return (
                        <li key={index}><span>{ing[0].toUpperCase()}</span>:{ing[1]}</li>
                    )
                })}
            </ul>
            <p>Continue to Checkout?</p>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
                <Button clicked={()=>{props.removed()}} btnType='Success'>Cancel</Button>
                <Button clicked={()=>{}} btnType='Danger'>Continue</Button>
        </div>
    )
}

export default OrderSummary
