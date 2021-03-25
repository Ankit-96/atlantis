import React, {Component} from 'react';

import {View, Text, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Button, IconButton, Colors} from 'react-native-paper';
import Search from 'react-native-search-box';

import SpecialRechrge from './SpecialRecharge';
import Popular from './Popular';
import BestOffers from './BestOffers';

const Tab = createMaterialTopTabNavigator();

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _renderTab = () => {
    let width = Dimensions.get('window').width * 0.6;

    return (
      <NavigationContainer>
        <View
          style={{
            flex: 0.3,
          }}>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 25,
              fontWeight: 'bold',
              color: '#E38534',
            }}>
            Browse Plans
          </Text>
          <Text
            style={{
              marginLeft: 20,
              color: '#697073',
            }}>
            for Airtel Kolkata
          </Text>
          <IconButton
            icon="close"
            size={20}
            style={{position: 'absolute', marginLeft: 270, marginTop: 25}}
            onPress={() => alert('Icon Pressed')}
          />
          <View style={{marginTop: 20}}>
            <Search
              backgroundColor={{backgroundColor: 'orange'}}
              inputHeight={30}
              placeholder={'Search Plan Amount, Talktime'}
              titleCancelColor={'#000'}
              searchIconCollapsedMargin={width - 40}
              placeholderCollapsedMargin={width - 50}
            />
          </View>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            style: {height: 40},
            labelStyle: {fontSize: 7.8},
            upperCaseLabel: false,
            indicatorStyle: {backgroundColor: '#E38534'},
          }}>
          <Tab.Screen style={{}} name="BestOffers" component={BestOffers} />
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

export default Home;
