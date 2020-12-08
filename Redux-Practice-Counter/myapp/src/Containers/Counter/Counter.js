import React, { Component } from "react";

import {connect} from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '../../store/action'
class Counter extends Component {

    state ={
        counter :0
    }

    render(){
        return(
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add" clicked={this.props.onAddCounter} />
                <CounterControl label="Substract" clicked={this.props.onSubstractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Results</button>
                <ul>
                    {this.props.storedResult.map(strResult=>(
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>

            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        ctr :state.counter,
        storedResult : state.results
    };
};
const mapDispatchToProps = dispatch =>{
return{
    onIncrementCounter : () => dispatch({type:actionTypes.INCREMENT}),
    onDecrementCounter : () => dispatch({type:actionTypes.DECREMENT}),
    onAddCounter : () =>dispatch ({type : actionTypes.ADD,val:10}),
    onSubstractCounter : () =>dispatch({type : actionTypes.SUBSTRACT, val:8}),
    onStoreResult : () => dispatch({type : actionTypes.STORERESULT}),
    onDeleteResult : (id) => dispatch({type : actionTypes.DELETERESULT , resultElId:id})
};
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);