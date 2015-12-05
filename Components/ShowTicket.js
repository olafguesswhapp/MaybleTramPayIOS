'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var ShowTicket = React.createClass({

  _onFinished: function(){
    this.props.nav.popToTop();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fertig!</Text>
      	<Text style={styles.welcome}>Hier ist Dein Ticket.{'\n'}Gute Fahrt!</Text>
        <Image
          style={{marginTop: 30}}
          source={require('../resources/images/qrcode.png')} />
        <TouchableOpacity style={styles.button} onPress={this._onFinished}>
          <Text style={styles.buttonText}>Neuer Vorgang</Text>
        </TouchableOpacity>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0FBF4',
  },
  title:{
    fontSize: 40,
    color: '#AAAAAA',
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    color: '#59C99E',
    textAlign: 'center',
    margin: 10,
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


module.exports = ShowTicket;
