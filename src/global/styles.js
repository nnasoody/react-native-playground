var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40
    },
    'textCenter': {
	    alignSelf: 'center'
    }
});

var fns = {
	paint: function(color) {
		return {
			backgroundColor: color || '#ccc' 
		}
	}
};

module.exports = Object.assign({}, styles, fns);