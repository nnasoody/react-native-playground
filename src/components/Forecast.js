var React = require('react-native');

var {
    StyleSheet,
    Text,
    View
} = React;

var Forecast = React.createClass({
    render: function() {
        return (
          <View>
            <Text style={[ styles.bigText ]}>{ this.props.main }</Text>
            <Text style={ styles.mainText }>Current conditions: { this.props.description } </Text> 
            <Text style={ styles.bigText }>{ this.props.temp }°F</Text> 
          </View>
        );
    }
});

var styles = StyleSheet.create({
    bigText: {
        fontSize: 20,
        margin: 10,
        color: '#FFFFFF',
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    mainText: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#FFFFFF',
        backgroundColor: 'transparent'
    }
});

module.exports = Forecast;
