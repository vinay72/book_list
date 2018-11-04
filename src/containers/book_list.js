import React, { Component } from 'react';
import { connect } from 'react-redux';

class Booklist extends Componenet{
	renderList(){
		return this.props.map((book){
			return(
             <li key = {book.title} className = "list-group-item">{book.title}</li>
			);
		});
    }

    render(){
    	return(
    	<ul className = "list-group col-sm-4">
    	 {this.renderList()}
    	 </ul>
    	)
    }
}

function mapStateToProps(state){
	// Whatever is returned will show up as props
	// inside of Booklist
	return{
      books:state.books;
	};
}

export default connect(mapStateToProps)(Booklist);

