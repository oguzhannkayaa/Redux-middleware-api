import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getCountries} from './services/actions';

function App(props) {

  useEffect(() => {
    props.getCountries();
  },[])

  return (
    <div className="App">
      {props.isLoading ? <p>Loading</p> : props.countries.map(country => {
        return (
          <div key={country.name}>
            <h1>{country.name}</h1>
          </div>
        )
      }) }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    isLoading: state.isLoading
  }
}


export default connect(mapStateToProps,{getCountries})(App);
