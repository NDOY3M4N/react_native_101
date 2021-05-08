import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'

export default function LoginAlt({ navigation }) {
  return (
    <View style={{ flex: 1, marginHorizontal: 30 }}>
      <View style={{ marginTop: 56, marginBottom: 20, alignItems: 'center' }}>
        <Image source={require('../assets/icon-app_alt.png')} />
      </View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Connectez vous</Text>

      <View style={{ marginTop: 20 }}>
        <MyInput
          placeholder="Entrez votre numéro de téléphone"
          type={'phone-pad'}
        />
      </View>

      <View style={{ flexDirection: 'column', marginTop: 40 }}>
        <TouchableOpacity style={{ marginTop: 25 }}>
          <MyButton type="green">Se connecter</MyButton>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 18 }}
          onPress={() => navigation.navigate('Login')}
        >
          <MyButton type="light_green">
            Se connecter avec une adrese email
          </MyButton>
        </TouchableOpacity>
      </View>
    </View>
  )
}
