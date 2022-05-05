/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as WebBrowser from 'react-native-web-browser';
import OpenLogin, { LoginProvider, Network } from 'openlogin-expo-sdk';
import { URL } from 'react-native-url-polyfill';
const scheme = 'openloginexposdkexampleexpo';
const resolvedRedirectUrl =  new URL(`${scheme}://openlogin`)

export default function App() {
  const [key, setKey] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const login = async () => {
    try {
      const openlogin = new OpenLogin(WebBrowser, {
        clientId:
          'BC5bANkU4-fil7C5s1uKzRfF0VGqbuaxDQiLnQ8WgF7SEA32lGegAhu7dk4dZf3Rk397blIvfWytXwsRvs9dOaQ',
        network: Network.TESTNET,
      });
      const state = await openlogin.login({
        loginProvider: LoginProvider.GOOGLE,
        redirectUrl: resolvedRedirectUrl,
      });
      setKey(state.privKey || 'no key');
    } catch (e) {
      console.error(e);
      setErrorMsg(String(e));
    }
  };
  return (
    <View style={styles.container}>
      <Text>Key: {key}</Text>
      <Text>Error: {errorMsg}</Text>
      <Text>Linking URL: {resolvedRedirectUrl.href}</Text>
      <Button title="Login with OpenLogin" onPress={login} />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
