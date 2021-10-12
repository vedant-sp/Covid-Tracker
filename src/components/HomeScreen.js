import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Card from './common/Card';
import {getData} from '../actions/HomeAction';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getData();
  }
  state = {
    search: '',
  };

  getText = text => {
    this.setState({search: text});
  };
  render() {
    const {surface, text, header, search} = styles;
    return (
      <View style={surface}>
        <View style={header}>
          <Text style={text}>Covid-Tracker</Text>
          <TextInput
            style={search}
            placeholder="State Name"
            placeholderTextColor="#000000"
            onChangeText={this.getText}
          />
        </View>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => (
            <Card
              confirmed={item.confirmed}
              active={item.active}
              recovered={item.recovered}
              deaths={item.deaths}
              lastupdatedtime={item.lastupdatedtime}
              stateName={item.state}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    backgroundColor: '#121212',
    flex: 1,
  },
  header: {
    backgroundColor: 'grey',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  search: {
    backgroundColor: '#ffffff',
    margin: 30,
    marginTop: 0,
    borderRadius: 15,
  },
});

function mapStateToProps(state) {
  return {
    data: state.home.data,
  };
}

export default connect(mapStateToProps, {getData})(HomeScreen);
