import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Card extends Component {
  render() {
    const {
      container,
      stateName,
      miniView,
      confirmed,
      num,
      text,
      recovered,
      death,
      activeText,
      activeCon,
      date,
    } = styles;
    return (
      <View style={container}>
        <Text style={stateName}>{this.props.stateName}</Text>
        <View style={miniView}>
          <View>
            <Text style={[confirmed, text]}>Active</Text>
            <Text style={[confirmed, num]}>{this.props.active}</Text>
          </View>
          <View>
            <Text style={[recovered, text]}>Recovered</Text>
            <Text style={[recovered, num]}>{this.props.recovered}</Text>
          </View>
          <View>
            <Text style={[death, text]}>Deaths</Text>
            <Text style={[death, num]}>{this.props.deaths}</Text>
          </View>
        </View>
        <View style={activeCon}>
          <Text style={activeText}>
            Confirmed Cases: {this.props.confirmed}
          </Text>
          <Text style={date}>
            Last Updated on:{' '}
            {Date(this.props.lastupdatedtime.split(' ')[0]).split(' ')[2]}{' '}
            {Date(this.props.lastupdatedtime.split(' ')[0]).split(' ')[1]}{' '}
            {Date(this.props.lastupdatedtime.split(' ')[0]).split(' ')[3]}{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
    // height: 50,
    backgroundColor: '#383838',
    borderRadius: 20,
  },
  stateName: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
    marginTop: 15,
  },
  miniView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  confirmed: {
    color: '#BB86FC',
  },
  recovered: {
    color: '#03dac6',
  },
  death: {
    color: '#FF0266',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  num: {
    fontSize: 26,
    textAlign: 'center',
  },
  activeCon: {marginBottom: 15},
  activeText: {
    textAlign: 'center',
    color: '#cf6679',
    fontSize: 22,
  },
  date: {
    color: '#BB86FC',
    textAlign: 'center',
  },
});

export default Card;
