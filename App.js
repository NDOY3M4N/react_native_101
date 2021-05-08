import 'react-native-gesture-handler'
import React from 'react'
import { View } from 'react-native'
import AppNavigation from './navigation/AppNavigation'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigation />
    </View>
  )
}
