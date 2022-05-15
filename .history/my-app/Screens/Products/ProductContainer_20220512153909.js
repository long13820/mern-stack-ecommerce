import { View, StyleSheet} from 'react-native'
import React from 'react'

const ProductContainer = () => {
  return (
    <View style ={styles.container}>
        <Text>ProductContainer</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    // listContainer: {
    //   height: height,
    //   flex: 1,
    //   flexDirection: "row",
    //   alignItems: "flex-start",
    //   flexWrap: "wrap",
    //   backgroundColor: "gainsboro",
    // },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
export default ProductContainer;