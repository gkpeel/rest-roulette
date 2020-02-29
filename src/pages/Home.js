import React from 'react';
import { Grid } from 'semantic-ui-react';
import HomeButtons from '../components/HomeButtons';

const Homepage = props => {
	return (
		<Grid container columns={1}>
			<Grid.Row>
				<Grid.Column>
					<h1>Welcome back, {props.user.firstName}</h1>
					<h2>Click here to randomize</h2>
					{/* <HomeButtons /> */}
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Homepage;
