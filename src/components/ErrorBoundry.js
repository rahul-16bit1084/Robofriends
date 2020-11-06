//for finding if there is an error in our robo lists (children)
import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
        this.state = {
        	hasError : false
        }
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

    render() {
    	//to show on body of CardList
    	if(this.state.hasError) {
    		return <h1>Ooooopps..its not good</h1>
    	}
///from the cardList
    	return this.props.children  
    }

}

export default ErrorBoundary;