import React from 'react';
import { Button } from 'semantic-ui-react';

const HomeButtons = props => {
	return (
		<Button.Group attached="bottom">
			<Button>Randomize</Button>
			<Button>Apply Filters</Button>
			<Button>Create New List</Button>
		</Button.Group>
	);
};

export default HomeButtons;
