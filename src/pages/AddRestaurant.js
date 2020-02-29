import React from 'react';
import { Grid } from 'semantic-ui-react';

const AddRestaurant = props => {
	return (
		<Grid container columns={1}>
			<Grid.Row>
				<Grid.Column>
					<h1>Add A Restaurant</h1>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default AddRestaurant;
