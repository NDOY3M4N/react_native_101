import React from 'react'
import { TextInput } from 'react-native'

const MyInput = ({ placeholder, password_field, type }) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={password_field}
      keyboardType={type}
      style={{
        width: '100%',
        borderColor: '#b1b1b1',
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
      }}
    />
  )
}

export default MyInput
