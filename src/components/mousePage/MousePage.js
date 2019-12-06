import React from 'react';
import './mousePage.css';
import Navigation from '../navigation/Navigation';

class MousePage extends React.Component {
	render(){

	  return (

		<div id="mousePage" className="page">
			<Navigation />
			<div className="content"></div>

			<div className="bottom">
				<div id="leftClick" className="mouseBtn"></div>
				<span className="wheelClick">
					<div id="wheelClickUp" className="mouseBtn"></div>
					<div id="wheelClickDown" className="mouseBtn"></div>
				</span>
				<div id="rightClick" className="mouseBtn"></div>
			</div>
		</div>
	  );
	}

}

export default MousePage;
