import React from 'react'
import {Component} from 'react';
import Aux from '../../hoc/Auxliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component
{
    state = {
        ingredient : {
            salad :1,
            bacon :1,
            cheese :2,
            meat : 2
        }
    }
    render()
    {
        return(
            <Aux>
                <Burger ingredient={this.state.ingredient}/>
                <div>Build Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;