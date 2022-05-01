/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import React from 'react'
import { name as appName } from './app.json'
import { SafeAreaProvider } from 'react-native-safe-area-context/src/SafeAreaContext'
import { Colors } from '@styles/index'
import store from './src/store/store'
import { Provider } from 'react-redux'

const BaseApp = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.WHITE }}>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  )
}

AppRegistry.registerComponent(appName, () => BaseApp)
