import { View, Text } from 'react-native'
import React from 'react'
import styles from '../CarItem/styles'

export default function ModelS() {
  return (
    <View style={styles.container}>
      <Text>Model X</Text>
      <Text>Order Online for </Text>
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});