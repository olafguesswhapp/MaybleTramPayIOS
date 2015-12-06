/* @flow */
'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var Intro = React.createClass({

	_onStart: function(){
    this.props.nav.push({
      id: 'SelectRate'
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
      	<View style={styles.imageWrapper}>
	        <Image
	          source={require('../resources/images/wayblegreen.png')} />
	      </View>
        <Text style={styles.welcome}>Deine App für kostenlose Fahrten im ÖPNV</Text>
        <TouchableOpacity style={styles.button} onPress={this._onStart}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
	container:{
    flex: 1,
    backgroundColor: 'white',
  },
  imageWrapper:{
  	flex:2,
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  welcome: {
  	flex:1,
    fontSize: 20,
    color: '#59C99E',
    textAlign: 'center',
    margin: 30,
    
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#59C99E',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = Intro;
