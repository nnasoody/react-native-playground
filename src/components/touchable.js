'use strict';

var React = require('react-native');

var {
	Text,
	View, 
	TouchableHighlight,
	StyleSheet
} = React;

var Button = React.createClass({
	
	getInitialState: function() {
		return {
			clicked: false
		};
	},

	_onPressIn: function() {
		this.setState({ clicked: true })
	},

	_onPressOut: function() {
		this.setState({ clicked: false });
	},

	render: function() {
		let content = this.state.clicked ? 'EEK!' : 'Click Me!';
		return (
			<View style={[ styles.container ]}>
				<TouchableHighlight 
					style={[ styles.touchable ]}
					onPressIn= { this._onPressIn }
					onPressOut={ this._onPressOut }>
					<View style={[ styles.btn ]}>
						<Text style={[ styles.mainText ]}>{ content }</Text>
					</View>	
				</TouchableHighlight>
			</View>

		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e9e9e9'
	},
	btn: {
		backgroundColor: '#FF0000',
		width: 200,
		height: 200,
		borderRadius: 100,
		justifyContent: 'center'
	},
	touchable: {
		borderRadius: 100
	},
	mainText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center'
	}
});

module.exports = Button;
