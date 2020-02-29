import React from 'react';
import { Grid } from 'semantic-ui-react';

const List = props => {
	return (
		<Grid container columns={1}>
			<Grid.Row>
				<Grid.Column>
					<h1>Here is your List of Restaurants</h1>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default List;
