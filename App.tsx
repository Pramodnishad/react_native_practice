// import { View, Text, ScrollView, SafeAreaView } from 'react-native'
// import React from 'react'
// import Styling from './components/Styling/Styling'
// import FormValidation from './components/FormValidation'
// import BgColor from './components/BgColor'

// const App = () => {
//   return (
//  <ScrollView>
//   <SafeAreaView>
//   <View>
//       <Text>App</Text>
//       {/* <Styling />
//       <FormValidation /> */}
     
//     </View>
//   </SafeAreaView>
//  </ScrollView>
//   )
// }

// export default App

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BgColor from './components/BgColor'
import RollDice from './components/RollDice'

const App = () => {
  return (
    <View style={styles.constainer}>
      {/* <BgColor /> */}
      <RollDice />
    </View>
  )
}

const styles = StyleSheet.create({
constainer:{
  flex:1
}

})
export default App