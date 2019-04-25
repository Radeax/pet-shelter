import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-router";
import { Link, BrowserRouter, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import ActivityForm from './components/PetForm';
import EditPet from './components/EditPet';
import PetDetails from './components/PetDetails';

function App() {
  return (
    <div>
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Route exact path="/" component={DashBoard} />
        <Route path="/pet/new" component={ActivityForm} />
        <Route path="/pet/:_id/edit" component={EditPet} />
        <Route path="/pet/:_id/details" component={PetDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
