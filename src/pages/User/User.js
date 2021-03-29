import React, { useState } from 'react';
import {
	Admin,
	Resource,
	List,
	Datagrid,
	TextField,
	Button,
} from 'react-admin';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import UpdateIcon from '@material-ui/icons/Update';

import seelApi from '../../utils/seelApi';
import AuthProvider from '../../provider/AuthProvider';
import DataProvider from '../../provider/DataProvider';
import SeelProvider from '../../provider/SeelProvider';
import './User.css';

/* const EventList = (props) => (
  <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="chapter" />
        <TextField source="description" />
        <EditButton /> 
        <DeleteButton undoable={false} />
    </Datagrid>
  </List>
); */

const SubscribersList = props => (
	<List {...props}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="isPaid" label="paid" />
			<TextField source="hasKit" label="kits" />
			<TextField source="name" />
			<TextField source="cpf" />
			<TextField source="rg" />
			<TextField source="email" />
			<CustomField />
		</Datagrid>
	</List>
);

const CustomField = props => {
	const [loading, setLoading] = useState(false);

	return (
		<Button
			onClick={async () => {
				setLoading(true);
				await seelApi.patch(
					'/subscribers',
					{
						email: props.record.email,
					},
					{
						headers: {
							Authorization: 'seelcomplex',
						},
					},
				);
				setLoading(false);
			}}
		>
			{loading ? <UpdateIcon /> : <CheckCircleIcon />}
		</Button>
	);
};

/* const EventCreate = (props) => (
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
) */

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
			<Admin dataProvider={SeelProvider} authProvider={AuthProvider}>
				{/* <Resource name="event" list={EventList} create={EventCreate} /> */}
				<Resource name="subscribers" list={SubscribersList} />
			</Admin>
		</div>
	);
}

export default User;
