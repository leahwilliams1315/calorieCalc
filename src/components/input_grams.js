import React, { Component } from 'react';

let initVal = '';

export default (props) => <div>
    <input type="number" placeholder="100g default" onChange={(event) => initVal = event.target.value }/>
    <button onClick={() => props.handleInputGrams(initVal)}>Enter</button>
</div>;
