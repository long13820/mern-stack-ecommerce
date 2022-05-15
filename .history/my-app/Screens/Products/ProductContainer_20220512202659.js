import { View, StyleSheet , FlatList, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductList from '../../Screens/Products/ProductList';
import {Container, Header, Icon, Item, Input, Text} from 'native-base'

const data = require('../../assets/data/products.json')

var { height } = Dimensions.get('window')
const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts(data);

      return ()=> {
        setProducts([]);
      }
    })
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon /
        </Item>
      </Header>
      <View style ={styles.container}>
        <FlatList 
            horizontal
            data={products}
            renderItem ={ ({item}) => <ProductList
               key = {item.id}
               item ={item}
            />}
            keyExtractor={item => item.name}
        />
    </View>
    </Container>
    
  )
}
const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
      height: height,
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
export default ProductContainer;