import { View, Text } from 'react-native'
import React from 'react'

export default function Modely() {
    return (
      <View style={styles.container}>
        <Text>Model Y</Text>
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