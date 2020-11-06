import React from 'react';
import {robots} from './robots.js'; //DATA

const SearchBox = ( { searchChange, searchfield } ) =>{
     
     return(
     	<div className='tc pa2'> 
           <input 
	            className = 'pa3 ba b--green bg-lightest-blue'
	            type='search'
	            placeholder='search robots'
	            onChange ={ searchChange }
           />
        </div>   
     ); 

}

export default SearchBox;