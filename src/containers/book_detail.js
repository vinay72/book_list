import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookDetail extends Component{
	render(){
		return (
        <div>Book Detail!</div>
		);
	}
}

function mapStateToProps(state){
	return{
      book: state.activeBook
	};
}
