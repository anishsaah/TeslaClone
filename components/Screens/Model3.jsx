import { View, Text } from 'react-native'
import React from 'react'

export default function Model3() {
  return (
    <View style={styles.container}>
      <Text>Model 3</Text>
      <Text>Order Online for  </Text>
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        justifyContent: "center",
    },
});