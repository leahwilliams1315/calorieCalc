import React, { Component } from 'react';
import InputGrams from './input_grams';

const IngredientItem = (props) => (
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', paddingBottom: '10px', marginBottom: '25px', borderBottom: '1px solid grey'}}>
        {/* Left calorie block of row */}
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <span>Calories</span>
            <h5 style={{padding: '3px'}}>{Math.ceil(props.cals * props.knownGrams)}</h5>
        </div>

        {/* Main block of row */}
        <div style={{display: 'flex', width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                <h4> {props.name}</h4>
                <InputGrams handleInputGrams={(gr) => props.updateGrams(gr) }/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </div>
    </div>);


export default IngredientItem;