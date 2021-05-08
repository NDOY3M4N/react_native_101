import React from 'react'
import { Text, View } from 'react-native'

const MyButton = (props) => {
  const myStylesView = {
    textTransform: 'uppercase',
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
  const myStylesText = {
    color: '#fff',
  }

  switch (props.type) {
    case 'white':
      myStylesView.backgroundColor = '#fff'
      myStylesText.color = '#000'
      break
    case 'light_white':
      myStylesView.borderStyle = 'solid'
      myStylesView.borderWidth = 1
      myStylesView.borderColor = '#fff'
      break
    case 'green':
      myStylesView.backgroundColor = '#11BD9E'
      break
    case 'light_green':
      myStylesView.borderStyle = 'solid'
      myStylesView.borderWidth = 1
      myStylesView.borderColor = '#11BD9E'
      myStylesText.color = '#11BD9E'
      break

    default:
  }

  return (
    <View style={myStylesView}>
      <Text style={myStylesText}>{props.children}</Text>
    </View>
  )
}

export default MyButton
