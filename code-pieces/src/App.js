import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { useHistory, Link } from 'react-router-dom';

// import dummyPieces from './data'

import { usePieces } from './hooks/usePieces'
import Pieces from './components/Pieces';


import './App.css';
import AddPiece from './components/codePieces/AddPiece';
import EditPieceForm from './components/codePieces/EditPieceForm';
import Menu from './components/Menu';
import PD from './PD';
import Piece from './components/codePieces/Piece';


const App = () => {
  const [ pieces,
		  setPieces, 
		  handleCreate, 
		  likePiece, 
		  deletePiece
		] = usePieces()

		
    return (
      <div className="App">
		  <Menu />
		  <Switch>
		  
		  	<Route path = '/editpieceform' render = {() => {
        		return (
          			<EditPieceForm/>
        		)
      		}}/>

			<Route path = '/addpiece' render = {() => {
        		return (
          			<AddPiece  addPiece = { handleCreate }/>
        		)
      		}}/>

			<Route path = '/pieces' render = { () => {
				return (
					<Pieces pieces = { pieces } 
						    setPieces = { setPieces }
							likePiece = { likePiece } 
							deletePiece = { deletePiece }
							
					/>

				)
			}} />

			<Route path = '/piece/:id' render = {(props) => {
        		return (
					<Piece {...props} />
          			// <PD />
        		)
      		}}/>

		</Switch>
      </div>
    );
  }

export default App;
 