'use strict';

var React = require('react-native');
var { Text } = React;

var Underline = React.createClass({
    render() {
        return (
            <Text style={[ { textDecorationLine: 'underline' } ]}>{this.props.children}</Text>
        );
    } 
});

module.exports = Underline;