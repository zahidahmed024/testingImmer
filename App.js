import React from 'react'
import Nav from './src/navigation/Nav'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/store/rootStore'
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Nav />
      </PaperProvider>
    </Provider>
  )
}
