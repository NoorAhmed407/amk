import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/Navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, Store } from './src/Redux'

const App = () => {
  return (
    <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
      <KeyboardAvoidingView
        style={{ flex: 1 }} behavior="height">
        <Navigation />
      </KeyboardAvoidingView>
    </PersistGate>
  </Provider>
  )
}

export default App;