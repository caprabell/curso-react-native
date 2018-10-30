import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import getAll from '../services/products';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',
  };

  state = {
    productInfo: {},
    docs: [],
    page: 1
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await getAll(page);
    const { docs, ...productInfo } = response.data;
    this.setState({
      docs: [...this.state.docs, ...docs],
      productInfo,
      page
    });
  };

  loadMore = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }

  renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Product", { product: item });
          }}
        >
          <Text style={styles.textButton}> Acessar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccffcc"
  },
  list: {
    padding: 10,
  },
  productContainer: {
    backgroundColor: "#a6ff4d",
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#333"
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    lineHeight: 24
  },
  button: {
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#00ff00",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#00ff00"
  },
});
