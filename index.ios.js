'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;

var Intro = require('./Components/Intro');
var SelectRate = require('./Components/SelectRate');
var SelectBrand = require('./Components/SelectBrand2');
var ShowAd = require('./Components/ShowAd');
var ShowTicket = require('./Components/ShowTicket');
var TopBar = require('./Components/TopBar');

var MableIOS = React.createClass({

  renderScene: function(route, navigator){
    if ('Intro' === route.id) {
      return (
        <View style={{flex: 1}}>
          <TopBar nav={navigator} displBackIcon={false} />
          <Intro nav={navigator} />
        </View>
      );
    } else if ('SelectRate' === route.id) {
      return (
        <View style={{flex: 1}}>
          <TopBar nav={navigator} displBackIcon={true} />
          <SelectRate nav={navigator} />
        </View>
      );
    } else if ('SelectBrand' === route.id) {
      return (
        <View style={{flex: 1}}>
          <TopBar nav={navigator} displBackIcon={true} />
          <SelectBrand nav={navigator} />
        </View>
      );
    } else if ('ShowAd' === route.id) {
      return (
        <View style={{flex: 1}}>
          <TopBar nav={navigator} displBackIcon={true} />
          <ShowAd nav={navigator} brandMaterial={route.brandMaterial}/>
        </View>
      );
    } else if ('ShowTicket' === route.id) {
      return (
        <View style={{flex: 1}}>
          <TopBar nav={navigator} displBackIcon={true} />
          <ShowTicket nav={navigator} />
        </View>
      );
    }
  },

  render: function() {
    return (
      <Navigator
        style={styles.container}  
        renderScene ={this.renderScene}
        initialRoute={{
          id: 'Intro',
          index: 0,
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C0FBF4',
  },
  toolbar: {
    backgroundColor: '#01577A',
    height: 56,
  },
});

AppRegistry.registerComponent('MableIOS', () => MableIOS);
