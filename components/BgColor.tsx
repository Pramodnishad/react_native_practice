import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const BgColor = () => {
    const [randomColor , setRandomColor] = useState("#ffffff")
const generateColor = () =>{
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() *16)]
    }
    setRandomColor(color)
}

  return (
   <>
   <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container, {backgroundColor:randomColor}]}>
    <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
   </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    actionBtn:{
        borderRadius: 12,
        backgroundColor: "#6A1B4D",
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    actionBtnTxt: {
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
      }
})

export default BgColor