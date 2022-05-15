import { View, StyleSheet ,Text, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'


const data = require('../../assets/data/products.json')
const ProductContainer = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
      setProducts(data);

      return ()=> {
        setProducts([]);
      }
    })
  return (
    <View style ={styles.container}>
        <FlatList 
            horizontal
            data={products}
            renderItem ={ ()}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
    //   height: height,
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