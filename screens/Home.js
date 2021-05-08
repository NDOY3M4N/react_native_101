import React from 'react'
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import MyButton from '../components/MyButton'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/homescreen.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginHorizontal: 30,
            marginVertical: 50,
          }}
        >
          {/* Logo here */}
          <Image
            source={require('../assets/icon-app.png')}
            style={{ width: 57, height: 57 }}
          />
          {/* Hero Text here */}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 40,
                fontWeight: 'semibold',
                textTransform: 'uppercase',
              }}
            >
              Lancez votre carrière maintenant
            </Text>
          </View>
          {/* Buttons here */}
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => navigation.navigate('Login')}
            >
              <MyButton type="white">Connexion</MyButton>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 1, marginLeft: 20 }}
              onPress={() => navigation.navigate('Signup')}
            >
              <MyButton type="light_white">Inscription</MyButton>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
