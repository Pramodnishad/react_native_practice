import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.textHeading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.one]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.two]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.three]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textHeading:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
    color:"white"
  },
  container:{
    flex:1,
    flexDirection:"row",
    padding:8
  },
  card:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    borderRadius:4,
    margin:4
  },
  one:{
    backgroundColor:"#EF5354"
  },
  two:{
    backgroundColor:"#50DBB4"
  },
  three:{
    backgroundColor:"#5DA3FA"
  }
})

export default FlatCards