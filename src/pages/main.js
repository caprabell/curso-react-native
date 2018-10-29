import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getAll } from '../services/products';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const docs = await getAll();
    console.log('comentario: ', docs );
  };

  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }
}
