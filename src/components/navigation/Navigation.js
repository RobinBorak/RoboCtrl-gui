import React from 'react';
import './navigation.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Navigation extends React.Component {
	render(){

	  return (
		<div className="navigation">
			<Link to="/keyboard" id="keyboard" className="pull-right">Keyboard</Link>
			<Link to="/mouse" id="mouse" className="pull-right">Mouse</Link>
		</div>
	  );
	}

}

export default Navigation;
