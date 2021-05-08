import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'

export default function Signup({ navigation }) {
  return (
    <View style={{ flex: 1, marginHorizontal: 30 }}>
      <View style={{ marginTop: 56, marginBottom: 20, alignItems: 'center' }}>
        <Image source={require('../assets/icon-app_alt.png')} />
      </View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Inscrivez vous</Text>

      <View style={{ marginTop: 20 }}>
        <MyInput placeholder="Prenom & Nom" />
        <MyInput placeholder="Adresse mail" />
        <MyInput password_field placeholder="Mot de passe" />
        <MyInput password_field placeholder="Confirmer mot de passe" />
      </View>

      <View style={{ flexDirection: 'column', marginTop: 40 }}>
        <TouchableOpacity style={{ marginTop: 25 }}>
          <MyButton type="green">Se connecter</MyButton>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 18 }}
          onPress={() => navigation.navigate('Home')}
        >
          <MyButton type="light_green">Se connecter</MyButton>
        </TouchableOpacity>
      </View>
    </View>
  )
}
