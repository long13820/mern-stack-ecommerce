import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';
const data = require('../../assets/data/products.json')
const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
      setProducts(data);

      return ()=>{
          setProducts([]);
      }
  }, [])
  return (
        <View>
            <FlatList 
              data={products}
              renderItem={(item) => <Text>{item.brand}</Text>}
              keyExtractor={item=> item.name}
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