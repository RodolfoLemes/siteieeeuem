import React from 'react'
import { Admin, 
  Resource, 
  List, 
  Datagrid, 
  TextField, 
  Create, 
  SimpleForm, 
  TextInput, 
  SelectInput, 
  DateTimeInput,
  Edit,
  EditButton,
  DeleteButton } from 'react-admin';

import AuthProvider from '../../provider/AuthProvider'
import DataProvider from '../../provider/DataProvider'
import './User.css';

const EventList = (props) => (
  <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="chapter" />
        <TextField source="description" />
        {/* <EditButton /> */}
        <DeleteButton undoable={false} />
    </Datagrid>
  </List>
);

const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateTimeInput source="date" />
      <TextInput source="description" />
      <SelectInput source="chapter" choices={[
          { id: 'IEEE', name: 'IEEE' },
          { id: 'CS', name: 'CS' },
          { id: 'RAS', name: 'RAS' },
          { id: 'BIOENG', name: 'BIOENG' },
          { id: 'PES', name: 'PES' },
        ]}
      />
    </SimpleForm>
  </Create>
)


/* const EventEdit = (props) => (
  <Edit title="Event MyEdit" {...props} >
    <SimpleForm>
      <TextField source="description" />
      <TextField source="_id" />
      <TextField source="id" />
      <TextField source="chapter" />
      <TextField source="date" />
    </SimpleForm>
  </Edit>
) */

function User() {
  return (
    <div className="User">
      <Admin dataProvider={DataProvider} authProvider={AuthProvider}>
        <Resource name="event" list={EventList} create={EventCreate} />
    	</Admin>
    </div>
  );
}

export default User