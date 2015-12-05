'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView
} = React;

var ShowAd = React.createClass({

  _onContinue: function(){
    this.props.nav.push({
      id: 'ShowTicket'
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Schritt 3</Text>
      	<Text style={styles.welcome}>Schaue nun Content deiner Sponsoren</Text>
        <View style={styles.webViewContainer}>
          <WebView
            style={styles.webView}
            url={this.props.brandMaterial} 
            renderLoading={this.renderLoading}
            renderError={this.renderError}
            automaticallyAdjustContentInsets={true} />
        </View>
        <TouchableOpacity style={styles.button} onPress={this._onContinue}>
          <Text style={styles.buttonText}>Fahrkarte erhalten</Text>
        </TouchableOpacity>
      </View>
    );
  },
  renderLoading: function () {
    console.log('## webView: loading()');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading video...</Text>
      </View>
    );
  },
  renderError: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Video not found - 404</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  webView: {
    marginTop:0,
    backgroundColor: 'black',
    width: 260,
  },
  webViewContainer: {
    flex: 1,
    borderColor: '#59C99E',
    borderWidth: 5,
    borderRadius: 8,
  },
});


module.exports = ShowAd;