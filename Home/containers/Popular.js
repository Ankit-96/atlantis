import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {FlatGrid} from 'react-native-super-grid';

const data = [
  {
    value: '399',
    validity: 'Validity: 365 Days',
    pack: 'Data: 1.5GB/Day',
    desc:
      'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days',
  },
];
const width = Dimensions.get('window').width;

class Popular extends Component {
  _renderItem = (item) => {
    return (
      <View style={styles.gridView}>
        <Button
          style={styles.button}
          compact={true}
          uppercase={false}
          labelStyle={{color: '#E38534', fontWeight: '400'}}
          mode="outlined"
          onPress={() => alert('Pressed')}>
          Select
        </Button>
        <Text style={styles.valueContainer}>{item.value}</Text>
        <View>
          <Text style={styles.validityContainer}>{item.validity}</Text>
          <Text
            style={[
              styles.validityContainer,
              {position: 'absolute', marginLeft: 150},
            ]}>
            {item.pack}
          </Text>
        </View>
        <Text style={styles.descContainer}>{item.desc}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatGrid
        style={{backgroundColor: '#fff'}}
        itemDimension={130}
        horizontal={true}
        ItemSeparatorComponent={
          <View style={{height: 1, width: '100%', backgroundColor: '#000'}} />
        }
        renderItem={(item) => this._renderItem(item.item)}
        data={data}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    height: 150,
    width: width - 40,
    backgroundColor: '#fff',
  },
  valueContainer: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    color: 'black',
  },
  validityContainer: {
    marginTop: 20,
    fontSize: 12,
    color: '#697073',
  },
  descContainer: {
    marginTop: 10,
    fontSize: 12,
    color: '#a5a9ab',
  },
  button: {
    borderColor: '#E38534',
    width: 95,
    marginLeft: width - 160,
    position: 'absolute',
    marginTop: 5,
    borderRadius: 20,
  },
});

export default Popular;
