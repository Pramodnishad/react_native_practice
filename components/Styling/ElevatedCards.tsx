import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.textHeading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.ElevatedCards]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCards]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCards]}>
            <Text>See</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCards]}>
            <Text>All</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCards]}>
            <Text>Cards</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCards]}>
            <Text>😘</Text>
        </View>

      </ScrollView>
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
        padding:8
    },
    card:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        borderRadius:4,
        margin:8
      },
      ElevatedCards:{
        backgroundColor:"lightblue",
        elevation:5,
        shadowOffset:{
            height:5,
            width:5
        },
        shadowColor:"black",
        shadowOpacity:0.5
      }
})

export default ElevatedCards