'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var TopBar = React.createClass({

	propTypes: {
	  nav: React.PropTypes.object.isRequired,
	  displBackIcon: React.PropTypes.bool.isRequired,
	},
	
	_onBackClicked: function(){
    this.props.nav.pop();
  },

  render: function() {
  	var _navIcon = this.props.displBackIcon ? require('../resources/images/lefticon.png') : require('../resources/images/transparent.png');

    return (
      <View style={styles.toolbar}>
        <View style={styles.navIconElement}>
          <TouchableOpacity onPress={this._onBackClicked}>
          	<Image
              style={{marginLeft: 15}}
          	  source={_navIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.navElement}>
      	 <Image
           source={require('../resources/images/wayble.png')} />
        </View>
        <View style={styles.navIconElement}>
          <TouchableOpacity onPress={this._onProfileClicked}>
            <Image
              style={{alignSelf: 'flex-end', marginRight: 15}}
              source={require('../resources/images/profile.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  toolbar:{
		flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: '#59C99E',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconElement:{
    flex: 1,
  },
  navElement:{
    flex: 1,
    alignItems: 'center',
  },
  title:{
  	color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
});


module.exports = TopBar;
