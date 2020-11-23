import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    const transformedIngredients = Object.keys(props.ingredient).map(igkey =>{
            return [...Array(props.ingredient[igkey])].map((_,i)=>{
                return <BurgerIngredient key={igkey + i} type={igkey} />
            });
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;
