import React, {Component} from 'react';

import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import Search from 'react-native-search-box';

import SpecialRechrge from './SpecialRecharge';
import Popular from './Popular';
import BestOffers from './BestOffers';

const Tab = createMaterialTopTabNavigator();
const actualWidth = Dimensions.get('window').width;
const width = Dimensions.get('window').width * 0.45;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _renderTab = () => {
    return (
      <NavigationContainer>
        <View
          style={{
            flex: 0.3,
          }}>
          <Text style={styles.upperText}>Browse Plans</Text>
          <Text style={styles.lowerText}>for Airtel Kolkata</Text>
          <IconButton
            icon="close"
            size={20}
            style={styles.iconStyle}
            onPress={() => alert('Icon Pressed')}
          />
          <View style={{marginTop: 30}}>
            <Search
              backgroundColor={{backgroundColor: 'orange'}}
              inputHeight={40}
              placeholder={'Search Plan Amount, Talktime'}
              titleCancelColor={'#000'}
              searchIconCollapsedMargin={width - 40}
              placeholderCollapsedMargin={width - 52}
            />
          </View>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            style: {height: 40},
            labelStyle: {fontSize: 12},
            upperCaseLabel: false,
            scrollEnabled: true,
            indicatorStyle: {backgroundColor: '#E38534'},
          }}>
          <Tab.Screen name="BestOffers" component={BestOffers} />
          <Tab.Screen name="Popular" component={Popular} />
          <Tab.Screen name="Special Recharge" component={SpecialRechrge} />
          <Tab.Screen name="Top Up" component={SpecialRechrge} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  render() {
    return this._renderTab();
  }
}

const styles = StyleSheet.create({
  upperText: {
    marginLeft: 25,
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#E38534',
  },
  lowerText: {
    marginLeft: 25,
    fontSize: 20,
    marginTop: 3,
    color: '#697073',
  },
  iconStyle: {
    position: 'absolute',
    marginLeft: actualWidth - 60,
    marginTop: 25,
  },
});

export default Home;
