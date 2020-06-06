import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import AuthProvider from '../../provider/AuthProvider'
import './User.css';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function User() {
  return (
    <div className="User">
      <Admin dataProvider={dataProvider} authProvider={AuthProvider}>
        <Resource name="users" list={ListGuesser} />
    	</Admin>
    </div>
  );
}

export default User