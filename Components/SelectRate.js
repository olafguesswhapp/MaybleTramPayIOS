'use strict';

var React = require('react-native');

var {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var rateSelection = ['Kurzstrecke', 'Tarif Preisstufe A1', 'Tarif Preisstufe A2', 'Tarif Preisstufe A3', 'Tarif Preisstufe A4']

var SelectRate = React.createClass({

  _onRateClicked: function(){
    this.props.nav.push({
      id: 'SelectBrand'
    });
  },

  render: function(){
    var list = rateSelection.map((item, index) => {
      return (
        <View key={index}>
          <TouchableOpacity style={styles.itemContainer} onPress={() => this._onRateClicked(index)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        </View>
      )
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Schritt 1</Text>
        <Text style={styles.welcome}>Wähle deinen Tarif</Text>
        <ScrollView
          horizontal={false}
          style={styles.scrollView}>
          {list}
        </ScrollView>
        <Text style={styles.welcome}>powered by Mable-Tech</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
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
  scrollView:{
    flex: 1,
  },
  itemContainer:{
    flex:1,
    paddingLeft: 20,
    margin: 5,
    height: 55  ,
    backgroundColor: '#59C99E',
    borderColor: '#C0FBF4',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center'
  },
  itemText:{
    fontSize: 20,
    color: 'white'
  },
});

module.exports = SelectRate;