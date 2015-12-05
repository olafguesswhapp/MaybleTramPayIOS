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

var brandSelection = [
{name: 'Coca-Cola',
icon: require('../resources/images/brand1.png'),
brandMaterial: 'https://www.youtube.com/embed/-gMjPezr8TY?rel=0&autoplay=1&showinfo=0&controls=1'},
{name: 'QPoints',
icon: require('../resources/images/brand4.png'),
brandMaterial:'https://www.youtube.com/embed/A-8HrBKTaXU?autoplay=1&showinfo=0&controls=1'},
{name: 'RedBull',
icon: require('../resources/images/brand3.png'),
brandMaterial: 'https://www.youtube.com/embed/kKPtLTg31Mg?autoplay=1&showinfo=0&controls=1'},
{name: 'Victorias Secret',
icon: require('../resources/images/brand2.png'),
brandMaterial: 'https://www.youtube.com/embed/8lZgpaVpKQk?autoplay=1&showinfo=0&controls=1'}]

var SelectBrand = React.createClass({

  _onBrandClicked: function(index){
    console.log('brand was clicked ' + index);
    this.props.nav.push({
      id: 'ShowAd',
      brandMaterial: brandSelection[index].brandMaterial
    });
  },

  render: function() {
    var list = brandSelection.map((item, index) => {
      return (
        <View key={index}>
          <TouchableOpacity style={styles.itemContainer} onPress={() => this._onBrandClicked(index)}>
            <Image
              style={styles.itemIcon}
              source={item.icon} />
          </TouchableOpacity>
        </View>
      )
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Schritt 2</Text>
      	<Text style={styles.welcome}>Wähle Deine Sponsoren</Text>
        <ScrollView
          horizontal={false}
          style={styles.scrollView}>
          {list}
        </ScrollView>
        <Text style={styles.welcome}>Weiter</Text>
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
  scrollView:{
    flex: 1,
  },
  itemIcon:{
    borderColor: '#C0FBF4',
    borderWidth: 2,
    borderRadius: 8,
  },
  itemContainer:{
    margin: 5,
    width: 106,
    height: 106,
    borderColor: '#59C99E',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    color: '#59C99E',
    textAlign: 'center',
    marginBottom: 10,
  },
});

module.exports = SelectBrand;