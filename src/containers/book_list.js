import React, { Component } from 'react';
export deafult class Booklist extends Componenet{
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

