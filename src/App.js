import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/search_bar';
import IngredientItem from './components/ingredient_info';

const API_KEY = '27c02d1c414ddd8bd928511895873014';

const APP_ID = 'dee762bc';


class App extends Component {


    state = {
        ingredients: []
    };


    getFoodData(searchterm){
        return axios.get(`https://api.nutritionix.com/v1_1/search/
        ${searchterm}?fields=item_name%2Citem_id%2Cbrand_name
        %2Cnf_calories%2Cnf_serving_weight_grams&appId=${APP_ID}&appKey=${API_KEY}`);
    }

    updateGramsAtIndex(grams, index) {
        this.setState({ingredients: this.state.ingredients.map((ing, i) => i === index ? {...ing, grams} : ing)})
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Calorie Calculator</h1>
        </div>


        <SearchBar handleSearch={(resultOfSearch) =>
        this.getFoodData(resultOfSearch).then((result) => this.setState({ingredients: result.data.hits})) } />


          <div style={{width: '80%', marginLeft: '10%'}}>
              {this.state.ingredients.map((food, i) => <IngredientItem key={food._id}
                                                                       name={food.fields.item_name}
                                                                       knownGrams={food.grams || 100}
                                                                       updateGrams={(grams) => this.updateGramsAtIndex(parseInt(grams), i)}
                                                                       cals={(food.fields.nf_calories/food.fields.nf_serving_weight_grams)}/>)}
          </div>



      </div>
    );
  }
}

export default App;
