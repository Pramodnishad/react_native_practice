import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './Constants'
import CurrencyButton from './components/CurrencyButton'
import Snackbar from 'react-native-snackbar'

const Main = () => {
    const [inputValue, setInputValue] = useState('')
    const [resultValue, setResultValue] = useState('')
    const [targetCurrency, setTargetCurrency] = useState('')
    const buttonPressed = (targetValue: Currency) => {
        if (!inputValue) {
            return Snackbar.show({
                text:"Please enter a value to convert it",
                backgroundColor:"#EA7773",
                textColor:"#000000"
            })
        }
        const inputAmount = parseFloat(inputValue)
        if(!isNaN(inputAmount)){
            const convertedValue = inputAmount * targetValue.value
            const  result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
            setResultValue(result)
            setTargetCurrency(targetValue.name)
        } else{
            return Snackbar.show({
                text:"Please enter a valid number to convert it",
                backgroundColor:"#F4BE2C",
                textColor:"#000000"
            }) 
        }
    }
    return (
        <View>
            <Text>Main</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center"
    }
})
export default Main