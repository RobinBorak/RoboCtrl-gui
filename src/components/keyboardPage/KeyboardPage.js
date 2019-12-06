import React from 'react';
import './keyboardPage.css';
import Navigation from '../navigation/Navigation';

import socketUtils from '../../common/SocketUtils';
const socket = socketUtils.socket;
class KeyboardPage extends React.Component {


	volumeUp = () =>{
		socket.on('volumeUp', function(volume){
			//$('#volume').html(volume);
		});
	}
	volumeDown = () =>{
		socket.on('volumeDown', function(volume){
			//$('#volume').html(volume);
		});
	}

	render(){


	  return (

		<div id="keyboardPage" className="page">
			<Navigation />
			<div className="content">
				<div className="center">
					<input id="keyboard" type="text" />

					<p id="volume"></p>
					<button id="volumeUp" onClick={this.volumeUp}>up</button>
					<button id="volumeDown" onClick={this.volumeDown}>down</button>
					<button id="volumeMute">toggle mute</button>

				</div>
			</div>

		</div>
	  );
	}

}

export default KeyboardPage;
