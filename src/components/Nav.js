import React from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';

const GlobalNav = props => {
	return (
		<Sidebar.Pushable as={Segment}>
			<Sidebar animation="uncover" as={Menu} visible></Sidebar>
			<Sidebar.Pusher>{props.children}</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

export default GlobalNav;
