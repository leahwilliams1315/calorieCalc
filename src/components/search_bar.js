import React, { Component } from 'react';


let currentValue = '';

export default (props) => <div>
    <input type="text" onChange={(event) => currentValue = event.target.value}/>
    <button onClick={() => props.handleSearch(currentValue)}>Search</button>
</div>;
