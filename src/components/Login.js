import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';

import { LOGO_URL } from '../helpers/constant';
import { borderColor, backgroundColor, white } from '../helpers/colors';

const Login = (props) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={{
        uri: LOGO_URL
      }} style={{
        flex: 1
      }}>
        <View style={styles.contentWrapper}>
          <View style={styles.topContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: LOGO_URL
              }}
            />
            <Text style={styles.text}>Sign in to TaskManager</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={props.email}
              onChangeText={props.setEmail}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={props.password}
              onChangeText={props.setPassword}
            />
            <Pressable onPress={props.handleLogin}>
              <Text style={styles.button} >Login</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: lightBlue
  },
  contentWrapper: {
    margin: '10%'
  },
  topContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 5
  },
  inputContainer: {
    backgroundColor,
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor,
    backgroundColor: white,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden',
    color: white,
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 600
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 5
  }
});

export default Login;
