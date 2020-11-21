import React, { Component } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal'
import Aux from '../../hoc/Aux'
import OrderSummary from './OrderSummary'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasabke: false,
        purchasing:false,


    }
    purchasehandler =()=>{
        const sta = this.state.purchasing
        this.setState({
            purchasing:!sta,
        })
    }
    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({
            purchasabke: sum > 0,

        })
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)

    }
    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
    }
    render() {

        return (
            <Aux>
                <Modal removeModal={this.purchasehandler} show={this.state.purchasing}>
                    <OrderSummary removed={this.purchasehandler} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} />
                </Modal>
                <div><Burger
                    ingredients={this.state.ingredients} /></div>
                <div>

                    <BuildControls
                        purchasehandler={this.purchasehandler}
                        purchasable={this.state.purchasabke}
                        totalPrice={this.state.totalPrice}
                        remove={this.removeIngredientHandler}
                        add={this.addIngredientHandler} />

                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder
