import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, marginHorizontal: 30 }}>
      <View style={{ marginTop: 56, marginBottom: 20, alignItems: 'center' }}>
        <Image source={require('../assets/icon-app_alt.png')} />
      </View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Connectez vous</Text>

      <View style={{ marginTop: 20 }}>
        <MyInput placeholder="Adresse Email" type={'email-address'} />
        <MyInput placeholder="Mot de passe" password_field />
      </View>

      <View style={{ alignSelf: 'flex-end', marginTop: 15 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 12, color: '#001F34' }}>
            Mot de passe oublié
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'column', marginTop: 40 }}>
        <TouchableOpacity style={{ marginTop: 25 }}>
          <MyButton type="green">Se connecter</MyButton>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 18 }}
          onPress={() => navigation.navigate('LoginAlt')}
        >
          <MyButton type="light_green">Se connecter avec un numéro</MyButton>
        </TouchableOpacity>
      </View>
    </View>
  )
}
