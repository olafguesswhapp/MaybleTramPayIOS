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
brandSelected: false,
icon: require('../resources/images/brand1.png'),
brandMaterial: 'https://www.youtube.com/embed/-gMjPezr8TY?rel=0&autoplay=1&showinfo=0&controls=1'},
{name: 'QPoints',
brandSelected: false,
icon: require('../resources/images/brand4.png'),
brandMaterial:'http://fast.wistia.net/embed/iframe/h6wco1pvey'},
{name: 'RedBull',
brandSelected: false,
icon: require('../resources/images/brand3.png'),
brandMaterial: 'https://www.youtube.com/embed/kKPtLTg31Mg?autoplay=1&showinfo=0&controls=1'},
{name: 'Victorias Secret',
brandSelected: false,
icon: require('../resources/images/brand2.png'),
brandMaterial: 'https://www.youtube.com/embed/8lZgpaVpKQk?autoplay=1&showinfo=0&controls=1'}]

var SelectBrand2 = React.createClass({

	getInitialState: function() {
	  return {
	    brandMaterial: '',
	  };
	},

  _onBrandClicked: function(index){
    if (brandSelection[index].brandSelected == true){
    	brandSelection[index].brandSelected = false;
    	this.setState({
	    	brandMaterial: ''
	    });
    } else {
    	brandSelection[index].brandSelected = true;
    	this.setState({
	    	brandMaterial: brandSelection[index].brandMaterial
	    });
    }
    console.log('brand was clicked:');
    console.log(brandSelection[index]);
  },

  _onContinue: function(){
    if (this.state.brandMaterial){
  		this.props.nav.push({
	      id: 'ShowAd',
	      brandMaterial: this.state.brandMaterial
	    });
  	}
  },

  render: function() {
    var list = brandSelection.map((item, index) => {
      return (
        <View key={index}>
          <TouchableOpacity
          	style={item.brandSelected ? styles.itemSelected : styles.itemContainer}
          	onPress={() => this._onBrandClicked(index)} >
            <Image
              style={styles.itemIcon}
              source={item.icon} />
          </TouchableOpacity>
        </View>
      )
    });
    
    var continueBTN;
    if (this.state.brandMaterial){
      continueBTN = (
        <TouchableOpacity style={[styles.button, styles.buttonEnabled]} onPress={this._onContinue}>
          <Text style={styles.buttonText}>Weiter</Text>
        </TouchableOpacity>
      );
  	} else {
      continueBTN = (
        <View style={[styles.button, styles.buttonDisabled]} onPress={this._onContinue}>
          <Text style={styles.buttonTextDisabled}>auf Sponsoren clicken</Text>
        </View>
      );
  	}

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Schritt 2</Text>
      	<Text style={styles.welcome}>Wähle Deine Sponsoren</Text>
        <ScrollView
          horizontal={false}
          style={styles.scrollView}>
          {list}
        </ScrollView>
        {continueBTN}
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
  itemSelected:{
  	borderColor: 'red',
    borderWidth: 4,
    borderRadius: 8,
  },
  welcome: {
    fontSize: 20,
    color: '#59C99E',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    alignSelf: 'center'
  },
  buttonTextDisabled: {
    fontSize: 17,
    color: '#59C99E',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonEnabled: {
    backgroundColor: '#59C99E',
  },
  buttonDisabled: {
    backgroundColor: '#C0FBF4',
  },
});

module.exports = SelectBrand2;