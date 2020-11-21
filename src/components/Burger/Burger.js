import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
function Burger(props) {
    let arr = [];
    Object.entries(props.ingredients).map((item,index)=>{
        for(let i=1; i<= item[1];i++){
            arr.push(item[0])
        }
    })
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {arr.length !==0 ? arr.map(item=>(<BurgerIngredients type={item}/>)):
            <p>There are no items in Burger</p>
            }
            <BurgerIngredients type="bread-bottom"/>

        </div>
    )
}

export default Burger
