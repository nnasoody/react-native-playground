'use strict';

var React        = require('react-native');
var Dimensions   = require('Dimensions');
var globalStyles = require('../global/styles');

var { StyleSheet, Text,	View, TextInput, Image } = React;
var { height, width } = Dimensions.get('window');

// ------------
// Globals
// ------------

window.STYLES = globalStyles;

// ------------
// Constants 
// ------------

const API_KEY = '3493324f52214f0f3e22d6a35264a09e'

// ------------
// Components
// ------------

var Forecast = require('./Forecast');

// ------------
// Module
// ------------

var WeatherProject = React.createClass({

    getInitialState() {
        return {
            zip: '',
            forecast: null
        }
    },

    _handleTextChange(event) {
        // Set placeholder
        if (!event.nativeEvent.text.trim())
            return this.setState({ forecast: null });

        let zip = event.nativeEvent.text;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&units=imperial&&APPID=${API_KEY}`;        
        this.setState({ zip: zip });
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                let weather = resp.weather[0];
                let temp = resp.main.temp;  
                this.setState({ forecast: {
                    main: weather.main,
                    description: weather.description,
                    temp: temp 
                }});
            });
    },

    render() {
        let forecast = null;
        if (this.state.forecast) {
            let props = {
                main        : this.state.forecast.main,
                description : this.state.forecast.description,
                temp        : this.state.forecast.temp 
            }
            forecast = <Forecast {...props} />
        }

        return (
            <View style={ styles.container }>
                <Image source={ require('../resources/img/background.jpg') }
                resizeMode='cover'
                style={styles.backdrop}>
                    <View style={[ styles.overlay ]}>
                        <View style={[ styles.row ]}>
                            <Text style={styles.mainText}>Current weather for</Text>
                            <View style={styles.zipContainer}>
                                <TextInput
                                    style={[styles.zipCode, styles.mainText]}
                                    returnKeyType='go'
                                    onSubmitEditing={this._handleTextChange}/>
                            </View>
                        </View>
                        {forecast}
                    </View>
                </Image>
            </View>

        );
    }

});

var baseFontSize = 16;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    backdrop: {
        height: height,
        width: width,
        flex: 1,
        flexDirection: 'column'
    },
    overlay: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30
    },
    zipContainer: {
        flex: 1,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3
    },
    zipCode: {
        width: 50,
        height: baseFontSize,
    },
    mainText: {
        flex: 1,
        fontSize: baseFontSize,
        color: '#FFFFFF'
    }    
});

module.exports = WeatherProject;


         

