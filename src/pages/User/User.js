import React from 'react'
import './User.css';

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function User() {
  return (
    <div className="User">
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
    	</Admin>
    </div>
  );
}

export default User