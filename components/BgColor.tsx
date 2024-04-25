import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const BgColor = () => {
    const [randomColor , setRandomColor] = useState("#ffffff")
    const [circleColor, setCircleColor] = useState("#ffffff")

    const colorGenerator = () =>{
        const hexaRange = '0123456789ABCDEF'
        let color = "#"
        for (let i = 0; i < 6; i++) {
          color += hexaRange[Math.floor(Math.random() * 16 )]  
        }
        setRandomColor(color)
    }
// const generateColors = () =>{
//     const hexRange = '0123456789ABCDEF'
//     let screenColor = '#'
//     let circleColor = '#'
//     for (let i = 0; i < 6; i++) {
//         screenColor += hexRange[Math.floor(Math.random() *16)]
//         circleColor += hexRange[Math.floor(Math.random() *16)]
//     }
//     setRandomColor(screenColor)
//     setCircleColor(circleColor)
// }


  return (
   <>
   <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container, {backgroundColor:randomColor}]}>
        <View style={[styles.circle, {backgroundColor: randomColor}]}>

        </View>
    {/* <TouchableOpacity onPress={generateColors}> */}
    <TouchableOpacity onPress={colorGenerator}>
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
    circle:{
        height:100,
        width:100,
        borderRadius:50,
       

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