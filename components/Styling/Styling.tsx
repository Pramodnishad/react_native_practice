import { View, Text } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCards from './ElevatedCards'
import FancyCards from './FancyCards'
import ContactList from './ContactList'
import ActionCard from './ActionCard'

const Styling = () => {
  return (
    <View style={{backgroundColor:"grey"}}>
      <FlatCards />
      <ElevatedCards />
      <FancyCards />
      <ContactList />
      <ActionCard />
    </View>
  )
}

export default Styling