import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import {robots} from '../components/robots.js'; //DATA
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';

class App extends Component { //  Parent Component 
	constructor(){
	   super()
       this.state = {   //StaTE cAN MODIFY
       		robots: [],
	        searchfield: ''
       }
    }

  componentDidMount() {  //pre-defined method in class
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({ robots : robots}));
  }


    onSearchChange = (event) => {
    	this.setState({  searchfield: event.target.value })
    //	console.log(filteredRobots); //get the value of what we type in searchbox using onchANGE
    }

	render(){

    const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot =>{
    		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase() );
    	})
   // 	console.log(filteredRobots); //get the value of what we type in searchbox using onchANGE
      if (robots.length === 0){
        return <h1>Loading...</h1>
      }
      else {
	    return (
		   <div className='tc  '>
		     <h1 className='f1'>RoboFriends</h1>
		     < SearchBox searchChange = {this.onSearchChange} />
            <Scroll>
             <ErrorBoundry>
               < CardList robots={ filteredRobots } />
             </ErrorBoundry>
            </Scroll>    
           </div>
	    );
    }
    }
}

export default App;