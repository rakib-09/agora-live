import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
      <View style={[styles.pageBody]}>
        <Text>Hello</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  pageBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 4,
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
  },
  uColor: {
    color: '#ff5722',
  },
  backButton: {
    marginTop: 10,
    backgroundColor: '#288ee2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    minWidth: 160,
    borderRadius: 999,
    elevation: 4,
  },
  buttonTitle: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});
