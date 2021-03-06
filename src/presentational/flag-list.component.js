import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../country.css';

const CountryFlagList = props => (
  <div className='countries-list'>
    {props.countries.map(country => {
      return (
        <div className='single-country' key={country.id}>
          <Link className='logo' to={'countries/country/' + country.id}>
            <CountryFlag country={country} />
          </Link>
          <button
            className='btn btn-danger'
            onClick={props.deleteCountry.bind(null, country.id)}
          >
            DELETE
          </button>
        </div>
      );
    })}
  </div>
);

export default CountryFlagList;
